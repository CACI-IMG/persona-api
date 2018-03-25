const personaData = require('../fake_profiles.json');

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('Personas', personaData, {}),
  down: queryInterface => queryInterface.bulkDelete('Personas', null, {}),
};
