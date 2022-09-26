const service = require('../services/checkoutService');

const getSeller = async (req, res, next) => {
    try {
        const data = await service.getSeller(req.body);
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
};

module.exports = { getSeller };