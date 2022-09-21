const { Router } = require('express');
const { createUserController } = require('../controllers/register.controller');

const registerRouter = Router();

registerRouter.post('/', createUserController);

module.exports = registerRouter;