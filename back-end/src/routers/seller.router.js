const { Router } = require('express');
const control = require('../controllers/sellerControl');

const sellerRouter = Router();

sellerRouter.get('/', control.getAllOrdersFromSeller);

module.exports = sellerRouter;