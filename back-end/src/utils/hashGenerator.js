const md5 = require('md5');
 
const hashValidation = (key) => {
    const hash = md5(key);
    return hash;
};

module.exports = hashValidation;