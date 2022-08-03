const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();
// starting page
router.get('/', shopController.getIndex);
//load getProducts
router.get('/products', shopController.getProducts);
//load getCart
router.get('/cart', shopController.getCart);
//load getcheckout
router.get('/checkout', shopController.getCheckout);

module.exports = router;
