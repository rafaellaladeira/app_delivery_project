const fs = require('fs');

const readFile = () => {
  // let secretPhrase = '';
  try {
    console.log(fs.readFileSync('jwt.evaluation.key', 'utf-8'));
    return fs.readFileSync('jwt.evaluation.key', 'utf-8');
    // return secretPhrase;
  } catch (error) {
    console.log(error);
  }
};

module.exports = readFile;