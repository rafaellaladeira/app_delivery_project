const db = require('../database/models');

const getAllOrders = async (userId) => {
  const sales = await db.Sale.findAll({
    attributes: ['id', 'total_price', 'status', 'sale_date']
  });
  return sales;
}

const getOrder = async (userId, orderId) => {
  return 1;
}

module.exports = { getAllOrders, getOrder }