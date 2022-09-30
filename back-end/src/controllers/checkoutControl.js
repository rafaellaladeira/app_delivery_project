const service = require('../services/checkoutService');

const getSeller = async (_req, res, next) => {
    try {
        const data = await service.getSeller();
        return res.status(200).json([...data]);
    } catch (error) {
        next(error);
    }
};

const postSale = async (req, res, next) => {
    try {
        const result = await service.postSale(req.body);
        return res.status(201).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = { 
    getSeller,
    postSale,
 };