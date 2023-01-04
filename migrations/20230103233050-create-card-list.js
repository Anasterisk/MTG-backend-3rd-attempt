'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cardLists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      card_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'cardId',
        onDelete: 'CASCADE',
        reference:{
          model: 'cards',
          key:'id'
        }
      },
      list_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'listId',
        onDelete: 'CASCADE',
        reference:{
          model: 'lists',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cardLists');
  }
};