const db = require('../database/models');

const getAllOrdersFromSeller = async () => {
    const data = await db.Sale.findAll({
        attributes: ['id', 'total_price', 'status', 'sale_date'],
        where: { sellerId: 2 },
    });
    console.log(data);
    return data;
};

const update = async (infos) => {
    const { id, status } = infos;
    const data = await db.Sale.update({ status: status.status }, { 
        where: { id: Number(id) },
    });
    return data;
};

module.exports = { 
    getAllOrdersFromSeller, 
    update,
};