const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop');
const isAuthenticated = require('../middleware/authentication');
const locals = require('../middleware/locals');

router.get('/', locals, shopController.getIndex);

router.get('/products', locals, shopController.getProducts);
router.get('/api/products', shopController.getProducts); 

 
router.get('/products/:productid', locals, shopController.getProduct);
router.get('/api/products/:productid', shopController.getProduct);

 
router.get('/getcategories/', locals, shopController.getCategories);
router.get('/api/getcategories/', shopController.getCategories);

router.get('/categories/:categoryid', locals, shopController.getProductsByCategoryId);
router.get('/api/categories/:categoryid', shopController.getProductsByCategoryId);

router.get('/cart',  locals,isAuthenticated, shopController.getCart);

router.post('/cart', locals, isAuthenticated, shopController.postCart);

router.post('/delete-cartitem', locals, isAuthenticated, shopController.postCartItemDelete);

router.get('/orders', locals, isAuthenticated, shopController.getOrders);

router.post('/create-order', locals, isAuthenticated, shopController.postOrder);

module.exports = router;