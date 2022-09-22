const { User } = require('../database/models');

const createUser = async ({ name, email, password, role }) => {
  const emailExists = await User.findOne({ where: { email } });
  const nameExists = await User.findOne({ where: { name } });

  if (emailExists || nameExists) return false;
  
  const newUser = await User.create({ name, email, password, role });

  return newUser;
};

module.exports = { createUser };