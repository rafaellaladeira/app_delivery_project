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
        console.log('control', req.body);
        const data = req.body;
        const result = await service.postSale(data);
        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
};

module.exports = { 
    getSeller,
    postSale,
 };