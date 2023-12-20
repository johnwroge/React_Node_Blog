const { Pool } = require('pg');
const db = require('../models/blog_model.js');

const { Request, Response, NextFunction } = require('express');

const postsController = {
    getPosts: async (req, res, next) => {
        const posts = [];

        try {
            const text = 'SELECT * FROM blog_posts';
            const result = await db.query(text);
            res.locals.posts = { ...result.rows };
            return next();
        } catch (err) {
            next({
                log: `postsController.getPosts: Error: ${err}`,
                message: {
                    err: `Error occurred in postsController.getPosts. Check server logs for more details`,
                },
            });
        }
    },

    deletePost: async (req, res, next) => {
        const { id } = req.body;
    
        try {
            const deleteQuery = 'DELETE FROM blog_posts WHERE id = $1';
            
            await db.query(deleteQuery, [id]);
    
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (err) {
            next({
                log: `deletePost: Error: ${err}`,
                message: {
                    err: `Error occurred in deletePost. Check server logs for more details`,
                },
            });
        }
    }
};

module.exports = postsController;