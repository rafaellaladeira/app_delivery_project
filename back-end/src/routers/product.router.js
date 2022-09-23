const { Router } = require('express');
const { getAllProducts } = require('../controllers/productController');

const productRouter = Router();

productRouter.get('/', getAllProducts);

module.exports = productRouter;

