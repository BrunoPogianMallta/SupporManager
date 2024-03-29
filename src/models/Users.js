const Sequelize = require('sequelize');

const db = require('../database');

const User = db.define ('user',{
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
      },
      user_name: {
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
      is_admin: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      currentId:{
        type: Sequelize.STRING,
      },
    }, {
      paranoid: true,
      timestamps: true,
    });
    
    User.sync({ alter: true })
   


module.exports = User;