const { Router } = require('express');
const { getAllOrders, getOrder } = require('../controllers/orderController');

const orderRouter = Router();

orderRouter.get('/', getAllOrders);
orderRouter.get('/:id', getOrder);

module.exports = orderRouter;