const fs = require('fs');
const questions = require('./lib/questions.js');
const fileName = "./examples/logo.svg";
const setShape = require('./lib/setShape.js');

// Wrapping the main logic inside an async function to use dynamic import
async function initialize() {
    try {
        // Dynamically import inquirer as it's an ES module
        const inquirer = await import('inquirer');

        // Prompt the user with questions
        const response = await inquirer.default.prompt(questions);
        
        // Create logo with the response
        createLogo(response);
    } catch (error) {
        console.error(error);
    }
}

function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(fileName, svg, () => console.log('Generated logo.svg'));
}

// Start the initialization
initialize();