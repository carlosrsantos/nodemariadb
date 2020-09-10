const Sequelize = require('sequelize');
const { Model } = require('sequelize');

//Conexão com o banco de dados MySQL
const sequelize = new Sequelize('postapp', 'root', 'root', {
    host: "localhost",
    dialect: 'mariadb'
});

module.exports = {
    Sequelize,
    sequelize
};