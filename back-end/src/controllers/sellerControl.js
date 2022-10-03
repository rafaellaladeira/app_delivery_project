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

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const status = req.body;
        const data = await service.update({ id, status });
        if (data) return res.status(200).end;
    } catch (error) {
        next(error);
    }
};

module.exports = { 
    getAllOrdersFromSeller,
    update, 
};