const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();
// starting page
router.get('/', shopController.getIndex);
//load getProducts
router.get('/products', shopController.getProducts);

//dynamic route but others are normal , order matters
router.get('/products/:productId', shopController.getProduct);
//load getCart
router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', shopController.postCartDeleteProduct);

router.get('/orders', shopController.getOrder);
//load getcheckout
router.get('/checkout', shopController.getCheckout);

module.exports = router;
