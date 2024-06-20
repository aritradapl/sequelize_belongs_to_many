const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const User = require('../models/User');
const UserProfile = require('../models/UserProfile');

const Profile = sequelize.define('profile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
});

sequelize.sync({
}).then(() => {
    console.log('profile table synchronized successfully!');
}).catch((error) => {
    console.error('Unable to synchronized table: ', error);
});

module.exports = {
    Profile
};