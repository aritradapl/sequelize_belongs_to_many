const { User } = require('./User');
const { Profile } = require('./Profile');
const { UserProfile } = require('./UserProfile');

User.belongsToMany(Profile, { 
    through: UserProfile,
    foreignKey: 'userId'  
});

Profile.belongsToMany(User, { 
    through: UserProfile,
    foreignKey: 'profileId' 
});

module.exports = { User, Profile, UserProfile };
