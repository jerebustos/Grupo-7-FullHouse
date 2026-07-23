'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
      await queryInterface.bulkInsert('Brands', [{
      
        name: 'Moulinex',
    
      },
      {
      
        name: 'Peabody',
    
      },
      {
      
        name: 'Atma',
    
      },
      {
      
        name: 'Philips',
    
      },
      {
      
        name: 'Whirlpool',
    
      },
      {
      
        name: 'Inelro',
    
      },
      {
      
        name: 'Samsung',
    
      },
      {
      
        name: 'Vondom',
    
      }
    ] );
   
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
