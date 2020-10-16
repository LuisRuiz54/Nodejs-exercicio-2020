'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
    */

    await queryInterface.bulkInsert('Tasklist', [{
      id_lugar: '1',
      nome_lista: 'Jardim Botânico',
      visitou_lista: false,
      comentarios_lista:'Gostaria de conhecer o Jardim Botanico',
      valor_lista:100,
      createdAt: new Date(),
      updatedAt: new Date()
  
    }]);
    },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
