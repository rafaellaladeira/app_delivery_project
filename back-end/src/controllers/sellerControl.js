const service = require('../services/seller.Service');

const getAllOrdersFromSeller = async (_req, res, next) => {
try {
    console.log('entrei na control');
    const data = await service.getAllOrdersFromSeller();
    return res.status(200).json(data);
} catch (error) {
    next(error);
}
};

module.exports = { getAllOrdersFromSeller };