const Sequelize = require('sequelize');

const DB_NAME = 'urna'
const USER_NAME = 'root'
const PASSWORD = ''
const HOST = 'localhost'

const sequelize = new Sequelize(DB_NAME, USER_NAME, PASSWORD,{
    host: HOST,
    dialect: 'mysql',
})

sequelize.authenticate().then(function (){
    console.log('Conectado ao banco com sucesso!.');
}).catch(function (error) {
    console.log('Falha na conexão: '+error);
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}