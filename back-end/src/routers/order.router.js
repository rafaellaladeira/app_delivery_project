const { Router } = require('express');
const { getAllOrders, getOrder } = require('../controllers/orderController');
const { needsAuth } = require('../services/loginService');

const orderRouter = Router();

orderRouter.get('/', needsAuth, getAllOrders);
orderRouter.get('/:id', getOrder);

module.exports = orderRouter;