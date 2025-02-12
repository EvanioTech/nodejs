'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('customers', 'status', {
      type: Sequelize.ENUM("active", "inactive"),
      allowNull: false,
      defaultValue: "active",
    });
    
  },

  async down (queryInterface) {
    return queryInterface.sequelize.transaction(async transaction => {


        await queryInterface.removeColumn('customers', 'status', { transaction });
        await queryInterface.sequelize.query('DROP TYPE "enum_customers_status"', { transaction });
        });

   
  }
};
