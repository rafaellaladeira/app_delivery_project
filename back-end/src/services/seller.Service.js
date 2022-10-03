const db = require('../database/models');

const getAllOrdersFromSeller = async () => {
    console.log('entrei aqui');
    const data = await db.Sale.findAll({
        attributes: ['id', 'total_price', 'status', 'sale_date'],
        where: { sellerId: 2 },
    });
    console.log(data);
    return data;
};

const update = async ({id ,status}) => {
    console.log('id', id);
    const data = await db.Sale.update({ status , where: { id } });
    return data;
};

module.exports = { 
    getAllOrdersFromSeller, 
    update,
};