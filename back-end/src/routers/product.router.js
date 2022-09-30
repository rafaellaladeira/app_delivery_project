const { Router } = require('express');
const { getAllProducts } = require('../controllers/productController');
const control = require('../controllers/checkoutControl');
const authenticationToken = require('../utils/authenticationToken');

const customerRouter = Router();

customerRouter.get('/products', getAllProducts);

customerRouter.get('/checkout', control.getSeller);
customerRouter.post('/checkout', authenticationToken, control.postSale);

module.exports = customerRouter;
