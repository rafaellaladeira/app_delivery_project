const db = require('../database/models');

const login = async (body) => {
    const { email, hash } = body;
    const data = await db.User.findOne({
    where: { email, password: hash },
    });
    return data;
    };

module.exports = {
    login,
};
