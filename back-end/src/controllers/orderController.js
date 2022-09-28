const orderService = require('../services/orderService');

const getAllOrders = async (req, res) => {
    const data = await orderService.getAllOrders();
    res.json(data);
}

const getOrder = async (req, res) => {
    const orderId = req.params.id;
    const data = await orderService.getOrder(1, 1);
    res.json(data);
}

module.exports = {
    getAllOrders,
    getOrder
}