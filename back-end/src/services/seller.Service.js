const db = require('../database/models');

const getAllOrdersFromSeller = async () => {
    const data = await db.Sale.findAll({
        where: { sellerdId: 2 },
    });
    console.log(data);
    return data;
};

module.exports = { getAllOrdersFromSeller };