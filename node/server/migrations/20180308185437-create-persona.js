module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    .then(() => queryInterface.createTable('Personas', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
        allowNull: false,
      },
      job: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      company: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ssn: {
        type: Sequelize.STRING,
        // unique: true,
      },
      residence: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      current_location: {
        type: Sequelize.ARRAY(Sequelize.DOUBLE),
        allowNull: false,
      },
      blood_group: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      website: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sex: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      mail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      birthdate: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
        allowNull: false,
      },
    })),
  down: queryInterface => queryInterface.dropTable('Personas'),
};
