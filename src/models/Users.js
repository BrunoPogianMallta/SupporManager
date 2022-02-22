const Sequelize = require('sequelize');

const db = require('../database');

const User = db.define ('user',{
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
    }, {
      paranoid: true,
      timestamps: true,
    });
    
    User.sync({ alter: true })
   


module.exports = User;