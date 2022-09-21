const userSchema = (sequelize, DataTypes) => {
  const user = sequelize.define("User", {
      id: {type:DataTypes.INTEGER,primaryKey: true},
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING
    }, {
      timestamps: false,
      tableName: 'User'
    });

    user.associate = (models) => {
      user.hasMany(models.Sales, { foreingKey: "id", as: "userId"})
    }
  
  return user;
};

module.exports = userSchema;