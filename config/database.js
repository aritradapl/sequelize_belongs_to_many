const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DATABASE || 'sequelize_belongsToMany',
    process.env.DB_USERNAME || 'root',
    process.env.DB_PASSWORD || 'admin#123',
    {
        host: process.env.DB_HOST || '127.0.0.1',
        dialect: process.env.DB_CONNECTION || 'mysql'
    }
);
module.exports = {
    sequelize
};