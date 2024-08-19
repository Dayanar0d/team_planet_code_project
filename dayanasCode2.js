const prompt = require("prompt-sync")();

const gravityFactors = require('./utils/earthGravityFactors.js');
const alienFactors = require('./utils/alienGravityFactors.js');

function showUserFactors(factorType, ){
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
}

