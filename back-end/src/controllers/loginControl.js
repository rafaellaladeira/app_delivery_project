const loginService = require('../services/loginService')

const login = async (req, res, next) => {
    try {
        const data = req.body;
        const result = await loginService.login(data);
        if (result) return res.status(200).end();
        return res.status(404).json({ error: "Not Found" });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    login,
}