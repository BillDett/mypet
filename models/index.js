const User = require('./User');
const Pet = require('./Pet');
const Action = require('./Action');

User.hasOne(Pet, {
    onDelete: 'CASCADE'
});
Pet.belongsTo(User);

module.exports = { User, Pet, Action };