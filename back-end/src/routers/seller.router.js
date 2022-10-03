const { Router } = require('express');
const control = require('../controllers/sellerControl');
const orderControl = require('../controllers/orderController');

const sellerRouter = Router();

sellerRouter.get('/', control.getAllOrdersFromSeller);
sellerRouter.get('/:id', orderControl.getOrder);
sellerRouter.put('/:id', control.update);

module.exports = sellerRouter;