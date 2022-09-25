const db = require('../database/models');

const getSeller = async ({ role }) => {
    const  [result] = await db.User.findAll({
        attributes: ['name'],
        where: { role },
    },
    )
    return result.dataValues;
};

module.exports = { getSeller };