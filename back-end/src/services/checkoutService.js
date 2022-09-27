const db = require('../database/models');

const getSeller = async () => {
    const result = await db.User.findAll({
        attributes: ['id', 'name'], where: { role: 'seller' },
    });
    return result;
};

const postSale = async (data) => {
    const {
        userName, sellerId, totalPrice, deliveryAddress, deliveryNumber, status,
    } = data;
    const userId = await db.User.findOne({
        attributes: ['id'], where: { name: userName },
    });
    const result = await db.Sale.create({
        userId: userId.dataValues.id,
        sellerId,
        totalPrice, 
        deliveryAddress,
        deliveryNumber,
        status,
    });
    result.save();
    console.log(result);
    return result.null;
};

module.exports = { 
    getSeller,
    postSale,
};
