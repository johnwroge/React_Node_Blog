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
};

module.exports = postsController;