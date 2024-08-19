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
        break;
    }

    for (let planet in results) {
        console.log(`Your jump height of ${type} on ${planet} is ${results[planet]} ${measurement}`);
    }
    console.log(type)

    function getUserInput() {
        console.log("enter a value('jump' or 'weight')");
        const factorType = prompt (">> ");

        console.log("enter value as a number");
        const factorValue = prompt (">> ");

        console.log("enter a height value('cm')");
        const factorMeasurement = prompt (">> ");

        console.log("enter a planet value");
        const factorPlanet = prompt (">> ");
    }
    while(true){
        console.log("enter height value!")
        for (let i=0; i < results.length -1; i++) 
        {if (factorType.trim().toLowerCase() === results[i])
        {match = true;break}}
     
    }

    
    showUserFactors(type, value);
}
console.log("eureka!");

global.showUserFactors = showUserFactors;