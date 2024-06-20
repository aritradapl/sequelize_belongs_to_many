const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const Profile = require('../models/Profile');
const UserProfile = require('../models/UserProfile');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
    }
});

sequelize.sync({
    // alter: true
}).then(() => {
    console.log('users table synchronized successfully!');
}).catch((error) => {
    console.error('Unable to synchronized table: ', error);
});

module.exports = {
    User
};