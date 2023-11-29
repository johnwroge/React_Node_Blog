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

app.get('/', (req, res) => {
    return res.send('Response from Server!');
});

app.get('/posts', postsController.getPosts, (req, res) => {
    return res.status(200).json(res.locals.posts);
});

app.listen(PORT, () => {
    console.log(`************************* EXPRESS server is listening on http://localhost:${PORT}/`);
    console.log(`************************* Frontend listening on  http://localhost:${5173}/`);
});
