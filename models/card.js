'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
  
    static associate(models) {
      Card.belongsToMany(models.List,{
        through: 'CardList',
        foreignKey:'cardId',
        as: 'deck',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  Card.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    subtype: DataTypes.STRING,
    cost: DataTypes.INTEGER,
    colors: DataTypes.STRING,
    colorIdentity: DataTypes.STRING,
    uniqueId: DataTypes.STRING,
    imageUrl: DataTypes.TEXT,
    basicLand: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'cards',
  });
  return Card;
};