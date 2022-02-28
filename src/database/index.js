const Sequelize = require('sequelize');

const sequelize = new Sequelize('supportmanager', 'postgres', 'postgres', {
    host: 'localhost',
    dialect:'postgres',
    logging: false,
    timezone:'-03:00'
  });

  sequelize.authenticate()
  .then(()=>{
    console.log('Conexão com banco de dados realizada com sucesso!');
  }).catch((err)=>{
    console.log("Erro: Conexão com o bancode dados não realizada!Erro:"+err)
  })

  module.exports = sequelize;