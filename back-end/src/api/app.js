const express = require('express');
const errorMiddleware = require('../middlewares/error.middleware');
const loginRouter = require('../routers/login.router');
const app = express();
require('express-async-errors');

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);
app.use(errorMiddleware);

module.exports = app;
