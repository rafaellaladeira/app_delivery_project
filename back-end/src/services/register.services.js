const { User } = require('../database/models');

const createUser = async ({ name, email, password, role }) => {
  const newUser = await User.create({ name, email, password, role });

  return newUser;
};

module.exports = { createUser };