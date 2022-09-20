'use strict';
module.exports = {
  up: async (queryInterface, Sequelize)=>{
    await queryInterface.createTable('salesProducts', {
      saleId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        field: 'sale_id',
        references: {
          model: 'Sale',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },

      productId: {
        allowNull: false,
        field: 'product_id',
        references: {
          model: 'Product',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};