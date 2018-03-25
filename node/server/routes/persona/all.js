const db = require('../../models/index');

module.exports = {
  async get(req, res) {
    const personas = await db.sequelize.models.Personas.findAll();
    res.send(personas);
  },
};
