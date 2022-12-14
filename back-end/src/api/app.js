const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middlewares/error.middleware');
const loginRouter = require('../routers/login.router');
const registerRouter = require('../routers/register.router');
const productRouter = require('../routers/product.router');
const orderRouter = require('../routers/order.router');
const customerRouter = require('../routers/product.router');
const sellerRouter = require('../routers/seller.router');
require('express-async-errors');

const app = express();

app.use(express.json());

app.use(cors());
// http://expressjs.com/en/starter/static-files.html
app.use('/images', express.static('public/images'));

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/customer', customerRouter);
app.use('/seller/orders', sellerRouter);
app.use(errorMiddleware);

module.exports = app;
