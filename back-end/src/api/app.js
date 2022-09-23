const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middlewares/error.middleware');
const loginRouter = require('../routers/login.router');
const registerRouter = require('../routers/register.router');
const productRouter = require('../routers/product.router');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);
app.use(errorMiddleware);

module.exports = app;
