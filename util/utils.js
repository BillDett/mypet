
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {

randomCondition: function() {
    return getRandomInt(65, 100);
},

randomTrait: function() {
    return getRandomInt(77, 100);
},

generateName: function() {
    return "Fred";
}

}