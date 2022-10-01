// const salesProductsSchema = (sequelize, DataTypes) => {
//   const salesProducts = sequelize.define("SalesProduct", {
//     saleId: { type: DataTypes.NUMBER, primaryKey: true },
//     productId: { type: DataTypes.NUMBER, primaryKey: true },
//     quantity: DataTypes.NUMBER
//   },
//     {
//       timestamps: false,
//       tableName: 'salesProducts',
//       underscored: true
//     });

//   return salesProducts;
// };

// salesProducts.associate = (models) => {
//   models.Sale.belongsToMany(models.Product, {
//     as: 'product',
//     through: salesProducts,
//     foreigKey: 'saleId',
//     otherKey: 'productId'
//   })

//   models.Product.belongsToMany(models.Sale, {
//     as: 'sale',
//     through: salesProducts,
//     foreigKey: 'productId',
//     otherKey: 'saleId'
//   })
// }

// module.exports = salesProductsSchema;


module.exports = (sequelize, DataTypes) => {
  const saleProductModel = sequelize.define('SalesProduct', {
    saleId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true },
    productId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true },
    quantity: DataTypes.NUMBER
  },
  {
    timestamps: false, 
    tableName: 'sales_products',
    underscored: true
  });

  saleProductModel.associate = (models) => {
    models.Sale.belongsToMany(models.Product,
      { 
        through: saleProductModel, 
        as: 'product', 
        foreignKey: 'saleId', 
        otherKey: 'productId'
      });

      saleProductModel.associate = (models) => {
        models.Product.belongsToMany(models.Sale,
          { 
            through: saleProductModel, 
            as: 'product', 
            foreignKey: 'productId', 
            otherKey: 'saleId'
          });
      };
  };  

  return saleProductModel
};
