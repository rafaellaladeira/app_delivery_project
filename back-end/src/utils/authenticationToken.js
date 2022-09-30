const jwt = require('jsonwebtoken');
const readFile = require('./ReadFile');
const { NotFound } = require('./utils');

const secretPhrase = readFile();

const authenticationToken = (req, _res, next) => {
    const token = req.headers.authorization;

    if (!token) NotFound('Not found');
    
    try {
        jwt.verify(token, secretPhrase);
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = authenticationToken;