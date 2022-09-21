const Joi = require('joi');
const InvalidInfo = require('../utils/utils');

const loginMiddleware = async (req, res, next) => {
    console.log(req.body);
   const { email, password } = req.body;
   try {
    const data = Joi.object({
        email: Joi.string().required().email().max(255),
        password: Joi.string().required().max(255),
    });
    const result = await data.validateAsync({ email, password })
    return result
   } catch (error) {
        InvalidInfo('Some required fields are missing');
   }
}

module.exports = loginMiddleware;