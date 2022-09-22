const { Router } = require('express');
const { createUserController } = require('../controllers/register.controller');
const { validRegister } = require('../middlewares/registerMiddleware');

const registerRouter = Router();

registerRouter.post('/', validRegister, createUserController);

module.exports = registerRouter;