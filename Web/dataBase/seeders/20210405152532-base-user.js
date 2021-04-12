'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
    name: "jeremias",
    lastName: "bustos",
    user: "jerebustos",
    email: "jerebustos@hotmail.com",
    addres: "pasteur 732",
    admi: false,
    birth_date: "1988-02-26",
    pass: "$2a$10$EFjy3ylEguAr3VxTuG9.BuS85ntds2JohTEuO1UgsHzvIBDdWuhBa",
    avatar: "avatar-1617124924559.jpg"
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
};
