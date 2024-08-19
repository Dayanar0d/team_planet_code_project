const prompt = require("prompt-sync")();

const gravityFactors = require('./utils/earthGravityFactors.js');
const alienFactors = require('./utils/alienGravityFactors.js');

function showUserFactors(factorType, )

    let results = [];
    let measurement;

    for(let planet in gravityFactors) {
        results[planet] = ((gravityFactors[planet] * value).toFixed(2));

    }
    for(let planet in alienFactors) {
        results[planet] = ((alienFactors[planet] * value).toFixed(2));

    }
    
    // Options for measuremets
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

    function getUserInput() {
        console.log("enter a value('jump' or 'weight')");
        const factorType = prompt (">> ");
    
        console.log("enter value as a number");
        const factorValue = prompt (">> ");
    
        console.log("enter a height value :3('cm')");
        const factorMeasurement = prompt (">> ");
    
        console.log("enter a planet value");
        const factorPlanet = prompt (">> ");
    }

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
        
    }
    global.showUserFactors = showUserFactors;
    global.getUserInput = getUserInput;