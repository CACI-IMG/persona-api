require('dotenv').config({ path: '.env' });

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const Sequelize = require('sequelize');
const routes = require('../routes');
const env = require('../.env')[process.env.NODE_ENV];

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes);

if (env.NODE_ENV !== 'test') {
  const sequelize = new Sequelize(
    env.DATABASE_NAME,
    env.DATABASE_USERNAME,
    env.DATABASE_PASSWORD,
    {
      host: env.DATABASE_HOST,
      port: env.DATABASE_PORT,
      dialect: env.DATABASE_DIALECT,
      define: {
        underscored: true,
      },
    },
  );

  sequelize
    .authenticate()
    .then(() => console.log('Connected!'))
    .catch(err => console.error('Unable to connect :(', err));

  sequelize
    .sync()
    .then(() => app.listen(env.PORT));
}

module.exports = app;
