const db = require('../database/models');
const generateToken = require('../utils/jwtGenerator');

const login = async (body) => {
    const { email, hash } = body;
    const data = await db.User.findOne({
    where: { email, password: hash },
    });

    if (data) {
        const { name, role } = data;
        const jwtResult = generateToken({ name, email, role });

        return { name, email, role, token: jwtResult };
    }
    return null;
    };

module.exports = {
    login,
};
