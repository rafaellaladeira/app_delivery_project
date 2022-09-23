const Joi = require('joi');

const NEW_USER = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().min(3).required().email(),
  password: Joi.string().min(6).required(),
  role: Joi.required(),
});

const validRegister = async (req, res, next) => {
  const { error } = NEW_USER.validate(req.body);
  if (error) {
    next(error);
  }
  next();
};

module.exports = {
  validRegister,
};