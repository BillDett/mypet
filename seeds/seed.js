const sequelize = require('../config/connection');
const { User, Action } = require('../models');

const actionData = [
    { "description": "sleep" },
    { "description": "eat" },
    { "description": "play" },
    { "description": "wander" },
    { "description": "preen" },
    { "description": "hiss" },
    { "description": "trouble" },
    { "description": "sick" },
    { "description": "poop" },
];

const userData = [
    {
        "name": "bill"
    },
    {
        "name": "jung"
    },
]
  
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const actions = await Action.bulkCreate(actionData, {
      returning: true,
    });

    const users = await User.bulkCreate(userData, {
        returning: true,
      });
     

    process.exit(0);
  };
  
  seedDatabase();
  