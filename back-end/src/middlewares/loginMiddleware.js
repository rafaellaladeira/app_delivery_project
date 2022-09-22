const { InvalidInfo } = require('../utils/utils');

const loginMiddleware = async (req, _res, next) => {
    try {
        const { email, password } = req.body;
        const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/gm;
        if (!email.match(emailRegex)) {
            InvalidInfo('Some required fields are missing');
        }
        if (password.length < 6) InvalidInfo('Some required fields are missing');
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = loginMiddleware;