const salesProductsSchema = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define("SalesProduct", {
    saleId: DataTypes.NUMBER,
    productId: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER
  }, 
  {
    timestamps: false,
  });

  return salesProducts;
};

module.exports = salesProductsSchema;