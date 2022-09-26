const db = require('../database/models');

const getSeller = async () => {
    const result = await db.User.findAll({
        attributes: ['name'],
        where: { role: 'seller' },
    });
    return result;
};

const postSale = async (data) => {
    const {
        userName, sellerName, totalPrice, deliveryAddress, deliveryNumber, status,
    } = data;
    const userId = await db.User.findOne({
        attributes: ['id'],
        where: { name: userName },
    });
    const sellerId = await db.User.findOne({
        attributes: ['id'],
        where: { name: sellerName },
    });
    const result = await db.Sale.create({
        userId: userId.id, sellerId: sellerId.id, totalPrice, 
        deliveryAddress, deliveryNumber, status,
    });
    return result.null;
};
// RECEBER O NOME DO CLIENTE E NOME DO VENDEDOR;

module.exports = { 
    getSeller,
    postSale,
};