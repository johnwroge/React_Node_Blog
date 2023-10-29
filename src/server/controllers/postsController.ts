const db = require('../models/blog_model.js');
import type { Request, Response, NextFunction, Router, Express, RequestHandler } from 'express';



const postsController: any = {};

postsController.getPosts = async (req: Request, res: Response, next: NextFunction) => {
    const posts = [];

    try {
        const text = `SELECT * FROM blog_posts`
        const result = await db.query(text);
        res.locals.posts = {...result}
        return next();
    }

    catch (err) {
        next({
            log: `postsController.getPosts: Error: ${err}`,
            message: {err: `Error occured in postsController.getPosts. Check server logs for more details`}
        })
    }
   
}



module.exports = postsController;