const jwt = require('jsonwebtoken');
const readFile = require('./ReadFile');

const secretPhrase = readFile();

module.exports = (payload) => {
  const { name, email, role } = payload;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ name, email, role }, secretPhrase, jwtConfig);
  return token;
};