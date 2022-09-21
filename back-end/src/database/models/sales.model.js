const salesSchema = (sequelize, DataTypes) => {
  const sales = sequelize.define("Sale", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    sellerId: {
      type: DataTypes.INTEGER,
      field: 'seller_id'
    },
    totalPrice: {
      type: DataTypes.DECIMAL,
      field: 'total_price'
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      field: 'delivery_address'
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      field: 'delivery_number'
    },
    saleDate: {
      type: DataTypes.DATE,
      field: 'sale_date'
    },
    status: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'sales',
  });

  sales.associate = (models) => {
    sales.belongsTo(models.User,
      { foreingKey: "userId", as: "userIds" },
      { foreingKey: "selledId", as: "userIds" }
    );
    // sales.belongsTo(models.User, )
  }

  return sales;
};

module.exports = salesSchema;