const jwt = require('jsonwebtoken');
// const readFile = require('./ReadFile');

// const secretPhrase = readFile();
const secretPhrase = require('fs').readFileSync('jwt.evaluation.key', { encoding: 'utf-8' });

module.exports = (payload) => {
   const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secretPhrase, jwtConfig);
  return token;
};