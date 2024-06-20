const express = require('express');

// Create Express app
const app = express();

// Database
const { sequelize } = require('./config/database');
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

// Models And Routes
const { User, Profile, UserProfile } = require('./models/index');

app.get('/api/users', (req, res) => {
    User.findAll(
        {
            include: [
                {
                    model: Profile
                }
            ]
        }
    ).then((users) => {
        res.send(users);
    }).catch((error) => {
        res.send(error);
    });
});

// Server listen
app.listen(5000, () => {
    console.log('Server is running on port http://localhost:' + 5000);
});