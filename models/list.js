'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    
    List.belongsTo(models.User,{
      foreignKey:'userId',
      as:'owner',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    })

    List.belongsToMany(models.Card,{
      through: 'CardList',
      foreignKey:'listId',
      as:'deck',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    })
    }
  }
  List.init({
    user_id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      field:'userId',
      onDelete: 'CASCADE',
      references:{
        model: 'users',
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    stats: DataTypes.STRING,
    status: DataTypes.STRING,
    completed: DataTypes.BOOLEAN,
    wishlist: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'List',
    tableName: 'lists',
  });
  return List;
};