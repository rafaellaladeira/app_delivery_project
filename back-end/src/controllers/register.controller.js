const { createUser } = require('../services/register.services');

const createUserController = async (req, res, _next) => {
  const { name, email, password, role } = req.body;

  await createUser({ name, email, password, role });

  return res.status(201).json({ message: 'ok' });
};

module.exports = { createUserController };