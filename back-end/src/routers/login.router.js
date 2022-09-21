const { Router } = require('express');
const loginControl = require('../controllers/loginControl');
const loginMiddleware = require('../middlewares/loginMiddleware');

const loginRouter = Router();

loginRouter.post('/', loginMiddleware, loginControl.login);

module.exports = loginRouter;