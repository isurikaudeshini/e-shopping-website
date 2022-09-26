const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

//GET/feed/posts
router.get('/posts',isAuth, feedController.getPosts);

//POST/feed/posts
router.post(
  '/post',
  [
    body('title').trim().isLength({ min: 5 }),
    body('content').trim().isLength({ min: 5 }),
  ],
  feedController.createPost
);

router.get('/post/:postId', feedController.getPost);

router.put('/post/:postId', [
  body('title').trim().isLength({ min: 5 }),
  body('content').trim().isLength({ min: 5 }),
], feedController.updatePost); 
//put => throgh asynvhronous requests triggered by post by JS you can use, has req body , params

router.delete('/post/:postId', feedController.deletePost); //delete=> can't send body
module.exports = router;
