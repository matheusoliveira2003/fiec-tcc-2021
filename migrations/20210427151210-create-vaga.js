'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Vagas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeEmp: {
        type: Sequelize.STRING,
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      descricao: {
        type: Sequelize.STRING,
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      reqVaga: {
        type: Sequelize.STRING
      },
      localEmp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Vagas');
  }
};