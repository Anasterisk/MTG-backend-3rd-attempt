'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
 
    
    static associate(models) {
     User.hasMany(models.List,{
      foreignKey:'userId',
      as:'owner',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
     })
    }
  }
  User.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};