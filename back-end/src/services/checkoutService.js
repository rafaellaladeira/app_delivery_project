const db = require('../database/models');

const getSeller = async () => {
    const result = await db.User.findAll({
        attributes: ['id', 'name'], where: { role: 'seller' },
    });
    return result;
};

const postSale = async (data) => {
    const {
        userName, productsCart, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
    } = data;
    const userId = await db.User.findOne({
        attributes: ['id'], where: { name: userName },
    });
    const saleId = await db.Sale.create({
        userId: userId.dataValues.id,
        sellerId,
        totalPrice, 
        deliveryAddress,
        deliveryNumber,
        status,
    });
    await Promise.all(productsCart.map((e) => db.SalesProduct
        .create({ saleId: saleId.null, quantity: e.quantity, productId: e.id })));
    return saleId.null;
};

module.exports = { 
    getSeller,
    postSale,
};
