const Sequelize = require('sequelize');

const db = require('../database');

const Notebooks = db.define ('notebook',{
      id:{
        type: Sequelize.STRING,
        primaryKey: true,
      },
      notebook_serial:{
        type: Sequelize.STRING,
        allowNull:false,
      },
      notebook_model: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      notebook_config: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      purchase_date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      warranty: {
        type: Sequelize.BOOLEAN,
        allowNull: true,
      },
      notebook_status:{
        type: Sequelize.STRING,
      },
    }, {
      paranoid: true,
      timestamps: true,
    });
    
    Notebooks.sync({ alter: true })
   


module.exports = Notebooks;