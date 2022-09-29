const orderService = require('../services/orderService');

const getAllOrders = async (req, res) => {
    const data = await orderService.getAllOrders(req.user.id);
    res.json(data);
};

const getOrder = async (req, res) => {
    const orderId = req.params.id;
    const data = await orderService.getOrder(orderId);
    res.json(data);
};

module.exports = {
    getAllOrders,
    getOrder,
};
