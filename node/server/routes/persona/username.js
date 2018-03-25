const db = require('../../models/index');
const Sequelize = require('sequelize');

const op = Sequelize.Op;

module.exports = {
  async get(req, res) {
    const persona = await db.sequelize.models.Personas.findAll({
      where: {
        username: {
          [op.like]: `%${req.params.username}%`,
        },
      },
    });
    res.send(persona);
  },
  async delete(req, res) {
    await db.sequelize.models.Personas.destroy({
      where: {
        username: req.params.username,
      },
    });
    res.send(`Deleted ${req.params.username}`);
  },
};
