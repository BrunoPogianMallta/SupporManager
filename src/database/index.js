const Sequelize = require('sequelize');

const sequelize = new Sequelize('supportmanager', 'postgres', 'postgres', {
    host: 'localhost',
    dialect:'postgres',
    logging: false,
    timezone:'-03:00'
  });

  module.exports = sequelize;