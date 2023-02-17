const { User, Pet, Action } = require('../models');

class Effect {

    // Attention methods take an id so that we can re-pull from database at all times

    // Decrease hunger by some random number based on amount
    static feed = (pet, amount) => {
        try {
            return pet.set({ hunger: 0 }) // TODO: Math here
                .save()
                .then(updatedPet => {
                    return true;
                });
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

class Condition {

    static current = pet => {
        // TODO: We should evaluate how the pet is based on timestamp
        // e.g. has hunger gotten too low since last attention, etc?
        // we update Pet in the database and return new version accordingly.

        /* TODO: mutate the pet's condition some how
            pet.hunger = 23.5;
        */
        return pet.save().then(updatedPet => {
            return updatedPet.dataValues;
        })
    }
}

module.exports = { Effect, Condition };
