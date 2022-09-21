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
          model: 'sales',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },

      productId: {
        allowNull: false,
        field: 'product_id',
        references: {
          model: 'products',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
    });
  },
  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('salesProducts');
  }
};