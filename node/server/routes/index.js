const routes = require('express').Router();
const persona = require('./persona');

routes.use('/', persona);

module.exports = routes;
