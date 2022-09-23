const salesProductsSchema = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define("SalesProduct", {
    saleId: { type: DataTypes.NUMBER, primaryKey: true },
    productId: { type: DataTypes.NUMBER, primaryKey: true },
    quantity: DataTypes.NUMBER
  },
    {
      timestamps: false,
    });

  return salesProducts;
};

salesProducts.associate = (models) => {
  models.Sale.belongsToMany(models.Product, {
    as: 'product',
    through: salesProducts,
    foreigKey: 'saleId',
    otherKey: 'productId'
  })

  models.Product.belongsToMany(models.Sale, {
    as: 'sale',
    through: salesProducts,
    foreigKey: 'productId',
    otherKey: 'saleId'
  })
}

module.exports = salesProductsSchema;