// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import markdown from 'utils/generateMarkdown';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Title of project:',
        name: 'title',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter project title.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Project description:',
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Enter a description.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'How to install project.',
        name: 'install',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Enter installation procedure.');
                return false;
            }
        }
    },
    {   
        type: 'input',
        message: 'Steps on testing project:',
        name: 'test',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Enter steps to test project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'How to use the project:',
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Enter usage of project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Requirements to contribute.',
        name: 'contributions',
        validate: contributionsInput => {
            if (contributionsInput) {
                return true;
            } else {
                console.log('Enter contribution requirements.');
                return false;
            }
        }
    },
    // {
    //     type: 'input',
    //     message: 'FAQ:',
    //     name: 'questions',
    //     validate: questionsInput => {
    //         if (questionsInput) {
    //             return true;
    //         } else {
    //             console.log('Enter any questions.');
    //             return false;
    //         }
    //     }
    // },
    {
        type: 'list',
        message: 'License the project uses.',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'N/a'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                return 'Select a license.';
            }
        }
    },
    {
        type: 'input',
        message: 'GitHub Username:',
        name: 'username',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('Enter a valid GitHub Username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Email address:',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter a valid email address.');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
