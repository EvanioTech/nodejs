'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('contacts', 'status', {
      type: Sequelize.ENUM("active", "inactive"),
      allowNull: false,
      defaultValue: "active",
    });
   
  },

  async down (queryInterface) {
    return queryInterface.sequelize.transaction(async transaction => {


        await queryInterface.removeColumn('contacts', 'status', { transaction });
        await queryInterface.sequelize.query('DROP TYPE "enum_contacts_status"', { transaction });
        });
    
  }
};
