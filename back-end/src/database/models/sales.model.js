const salesSchema = (sequelize, DataTypes) => {
  const sales = sequelize.define("Sale", {
    id: {type:DataTypes.INTEGER,primaryKey: true},
      userId: DataTypes.INTEGER,
      sellerId: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: DataTypes.DATE,
      status: DataTypes.STRING
    }, {
      timestamps: false,
      tableName: 'sales',
    });

    sales.associate = (models) => {
      sales.belongsTo(models.User, {foreingKey: "userId", as: "userId"});
      // sales.belongsTo(models.User, {foreingKey: "selledId", as: "userId"})
    }

    return sales;
};

module.exports = salesSchema;