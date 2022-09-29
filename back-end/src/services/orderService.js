const db = require('../database/models');

const getAllOrders = async (userId) => {
  const sales = await db.Sale.findAll({
    attributes: ['id', 'total_price', 'status', 'sale_date'],
    where: { userId },
  });
  return sales;
};

const getOrder = async (orderId) => {
  const sale = await db.Sale.findOne({
    where: { id: orderId },
    include: ['user', 'seller', 'product'],
  });
  return sale;
};

module.exports = { getAllOrders, getOrder };
