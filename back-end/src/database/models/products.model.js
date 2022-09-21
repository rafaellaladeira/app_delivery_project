'use strict';
const productsSchema = (sequelize, DataTypes) => {
 const products = sequelize.define("Product", {
     id: {type:DataTypes.INTEGER,primaryKey: true},
     name: DataTypes.STRING,
     price: DataTypes.DECIMAL,
     urlImage: DataTypes.STRING
   }, {
    timestamps: false,
   });

   
   return products;
};

module.exports = productsSchema;