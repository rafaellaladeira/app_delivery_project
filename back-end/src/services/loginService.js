const jwt = require('jsonwebtoken');
const db = require('../database/models');
const generateToken = require('../utils/jwtGenerator');
const readFile = require('../utils/ReadFile');

const secretPhrase = readFile();

const login = async (body) => {
    const { email, hash } = body;
    const data = await db.User.findOne({
    where: { email, password: hash },
    });

    if (data) {
        const { name, role } = data;
        const jwtResult = generateToken({ name, email, role });

        return { name, email, role, token: jwtResult };
    }
    return null;
    };

const needsAuth = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Not authorized' });

    const data = jwt.decode(token, secretPhrase, { algorithm: 'HS256' });
    if (!data) return res.status(400).json({ message: 'Invalid token' });

    const { email } = data;
    const user = await db.User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    req.user = user;
    next();
};

module.exports = {
    login,
    needsAuth,
};
