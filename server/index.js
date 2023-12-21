const express = require('express');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const { appendFile } = require('fs');
const postsController = require('./controllers/postsController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

app.use(express.static(path.join(__dirname, '../../client/dist')));


app.get('/posts', postsController.getPosts, (req, res) => {
    return res.status(200).json(res.locals.posts);
});
app.post('/posts', postsController.createPost, (req, res) => {
    return res.status(201).json(res.locals.posts);
});
app.put('/posts', postsController.updatePost, (req, res) => {
    return res.status(200).json(res.locals.posts);
});
app.delete('/posts', postsController.deletePost, (req, res) => {
    return res.status(res.statusCode).json(res.locals.posts);
});

app.listen(PORT, () => {
    console.log(`************************* EXPRESS server is listening on http://localhost:${PORT}/`);
    console.log(`************************* Frontend listening on  http://localhost:${5173}/`);
});
