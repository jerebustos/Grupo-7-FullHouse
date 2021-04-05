'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    user: DataTypes.STRING,
    email: DataTypes.STRING,
    addres:DataTypes.STRING,
    admi: DataTypes.BOOLEAN,
    birth_date: DataTypes.DATE,
    pass: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};