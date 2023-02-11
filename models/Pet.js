const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const utils = require("../util/utils.js");


class Pet extends Model {

    // "birth" a new Pet with randomized traits.
    static generateNewPet(u_id) {
        return {
            name: utils.generateName(),
            action_id: 1,
            user_id: u_id,
            agreeability: utils.randomTrait(),
            robustness: utils.randomTrait(),
            playfulness: utils.randomTrait(),
            mischeviousness: utils.randomTrait(),
            teachability: utils.randomTrait(),
            hunger: utils.randomCondition(),
            fatigue: utils.randomCondition(),
            hunger: utils.randomCondition(),
            health: utils.randomCondition(),
            attitude: utils.randomCondition(),
            mood: utils.randomCondition()
        }
    }

}

Pet.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        action_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'action',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        agreeability: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        robustness: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        playfulness: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        mischeviousness: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        teachability: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        adaptabiilty: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        living: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true
        },
        hunger: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        fatigue: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        health: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        attitude: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        mood: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'pet',
    }
);

module.exports = Pet;
