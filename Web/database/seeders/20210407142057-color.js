'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Colors', [{
        name: 'Rojo'
      },
      {
        name: 'Azul'
      }, {
        name: 'Negro'
      },
      {
        name: 'Gris'
      }, {
        name: 'Blanco'
      },
      {
        name: 'Marron'
      }, {
        name: 'Naranja'
      },
      {
        name: 'Amarillo'
      },{
       name: 'Violeta'},
       {
        name: 'Verde'
       },{
        name: 'Celeste'}
    ]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};