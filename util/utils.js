
const fs = require('fs');

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let names = [];

module.exports = {

randomCondition: function() {
    return getRandomInt(65, 100);
},

randomTrait: function() {
    return getRandomInt(77, 100);
},

generateName: function() {
    if (names.length == 0) {
        // Load the names file once
        const data = fs.readFileSync('./util/names.txt', {encoding:'utf8', flag:'r'});
        names = data.split(/\r?\n/);
    }
    return names[getRandomInt(0, names.length)];
}

}