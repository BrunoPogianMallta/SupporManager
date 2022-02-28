const Sequelize = require('sequelize');

const db = require('../database');

const Company = db.define('company',{
    id:{
        type: Sequelize.STRING,
        primaryKey:true,
    },
    company_name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
},
    {
        paranoid: true,
        timestamps: true,
})

Company.sync({ alter: true })

module.exports = Company;