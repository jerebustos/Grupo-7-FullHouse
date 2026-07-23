'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Color, { 
        as: "color",
        foreignKey: "color_id"
    })

    this.belongsTo(models.Brand, { 
      as: "brand",
      foreignKey: "brand_id"
  })

  this.belongsTo(models.Category, { 
    as: "category",
    foreignKey: "category_id"
})


    }
  };
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    color_id: DataTypes.INTEGER,
    accessory: DataTypes.STRING,
    brand_id: DataTypes.INTEGER,
    model: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};