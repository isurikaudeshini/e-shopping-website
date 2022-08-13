const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Appserver', {
    dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;