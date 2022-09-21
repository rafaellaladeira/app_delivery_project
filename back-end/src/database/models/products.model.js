'use strict';
const productsSchema = (sequelize, DataTypes) => {
 const products = sequelize.define("Product", {
     id: {type:DataTypes.INTEGER,primaryKey: true},
     name: DataTypes.STRING,
     price: DataTypes.DECIMAL,
     urlImage: {
      type: DataTypes.STRING,
      field: 'url_image'
     },
   }, 
   {
    timestamps: false,
   });

   
   return products;
};

module.exports = productsSchema;