'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CardList extends Model {

    static associate(models) {

    }
  }
  CardList.init({
    card_Id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      field:'cardId',
      onDelete:'CASCADE',
      references: {
        model: 'cards',
        key: 'id'
      }
    },
    list_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'listId',
      onDelete: 'CASCADE',
      references:{
        model:'lists',
        key:'id'
      }
    }
  }, {
    sequelize,
    modelName: 'CardList',
    tableName: 'cardLists',
  });
  return CardList;
};