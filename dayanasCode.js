const prompt = require("prompt-sync")();

const gravityFactors = require('./utils/earthGravityFactors.js');
const alienFactors = require('./utils/alienGravityFactors.js');

function showUserFactors(type, value) {

    let results = [];
    let measurement;

    for(let planet in gravityFactors) {
        results[planet] = ((gravityFactors[planet] * value).toFixed(2));

    }
    for(let planet in alienFactors) {
        results[planet] = ((alienFactors[planet] * value).toFixed(2));

    }

    switch(type) {
        case "jump":
        measurement = "cm";
        break;
        case "weight":
        measurement = "kg";
        break;
        default:
        measurement = "na";
    }

    for (let planet in results) {
        console.log(`Your jump height of ${type} on ${planet} is ${results[planet]} ${measurement}`);
    }
    console.log(type)

    function getUserInput() {
        console.log("enter a value('jump' or 'weight')");
        const type = prompt (">> ");
        console.log("enter value as a number");
        const value = prompt (">> ");

        showUserFactors(type, value);
    }
    
}
console.log("eureka!");

global.showUserFactors = showUserFactors;