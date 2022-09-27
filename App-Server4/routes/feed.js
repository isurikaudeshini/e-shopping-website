const express = require('express');
const { body } = require('express-validator');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

//GET/feed/posts
router.get('/posts', isAuth, feedController.getPosts);

//POST/feed/posts
router.post(
  '/post',
  [
    body('title').trim().isLength({ min: 5 }),
    body('content').trim().isLength({ min: 5 }),
  ],
  isAuth,
  feedController.createPost
);

router.get('/post/:postId', isAuth, feedController.getPost);

router.put('/post/:postId', isAuth, [
  body('title').trim().isLength({ min: 5 }),
  body('content').trim().isLength({ min: 5 }),
], feedController.updatePost); 
//put => through asynchronous requests triggered by post by JS you can use, has req body , params

router.delete('/post/:postId', isAuth, feedController.deletePost); //delete=> can't send body
module.exports = router;
