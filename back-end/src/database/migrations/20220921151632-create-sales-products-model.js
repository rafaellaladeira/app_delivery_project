'use strict';
module.exports = {
  up: async (queryInterface, Sequelize)=>{
    await queryInterface.createTable('sales_products', {
      saleId: {
        primaryKey: true,
        field: 'sale_id',
        references: {
          model: 'sales',
          key: 'id',
        },
        type: Sequelize.INTEGER
      },

      productId: {
        field: 'product_id',
        primaryKey: true,
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
    await queryInterface.dropTable('sales_products');
  }
};