const express = require('express');
const { check } /*Destructured, js object*/ = require('express-validator'); //check is a subpackage of express-validator

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.get('/reset', authController.getReset);

router.post('/login', authController.postLogin);

router.post(
  '/signup',
  check('email')
    .isEmail()
    .withMessage('Please enter a valid email.')
    .custom((value, {req}) => {
      if (value === 'test@test.com') {
        throw new Error('THis email is forbidden');
      }
      return true;
    }),
  authController.postSignup
); //isEmail method to check the email field on the incoming request

router.post('/logout', authController.postLogout);

router.post('/reset', authController.postReset);

router.get('/reset/:token', authController.getNewPassword);

router.post('/new-password', authController.postNewPassword);

module.exports = router;
