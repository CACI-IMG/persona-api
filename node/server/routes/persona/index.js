const persona = require('express').Router();
const all = require('./all');
const username = require('./username');

persona.get('/people', all.get);
persona.delete('/people/:username', username.delete);
persona.get('/search/:username', username.get);

module.exports = persona;
