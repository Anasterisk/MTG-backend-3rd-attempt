'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      subtype: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.INTEGER
      },
      colors: {
        type: Sequelize.STRING
      },
      colorIdentity: {
        type: Sequelize.STRING
      },
      uniqueId: {
        type: Sequelize.STRING
      },
      imageUrl: {
        type: Sequelize.TEXT
      },
      basicLand: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('cards');
  }
};