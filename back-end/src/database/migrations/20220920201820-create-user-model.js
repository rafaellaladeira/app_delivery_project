'use strict';

const salesSchema = require("../models/sales.model");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      role: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};