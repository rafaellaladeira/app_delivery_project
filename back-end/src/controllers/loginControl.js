const { NotFound } = require('../utils/utils');
const loginService = require('../services/loginService');
const hashValidation = require('../middlewares/hashMiddleware');

const login = async (req, res, next) => {
    try {
        const { password, email } = req.body;
        const hash = hashValidation(password);
        const data = { email, hash };
        const result = await loginService.login(data);
        if (result) return res.status(200).end();
        NotFound('Not found');
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
};