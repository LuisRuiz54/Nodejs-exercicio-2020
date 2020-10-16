'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Tasklist', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_lugar: {
        type: Sequelize.INTEGER
      },
      nome_lista: {
        type: Sequelize.STRING
      },
      visitou_lista: {
        type: Sequelize.BOOLEAN
      },
      comentarios_lista: {
        type: Sequelize.STRING
      },
      valor_lista: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('task-list');
  }
};