const Sequelize = require('sequelize');

const db = require('../database');

const Collaborators = db.define('collaborator',{
    id:{
        type: Sequelize.STRING,
        primaryKey:true,
    },
    user_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    phone_number:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    address:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    company:{
        type:Sequelize.STRING,
        allowNull:true,
    },
    has_notebook:{
        type: Sequelize.BOOLEAN,
        allowNull:true,
    },
},
    {
        paranoid: true,
        timestamps: true,
})

Collaborators.sync({ alter: true })

module.exports = Collaborators;