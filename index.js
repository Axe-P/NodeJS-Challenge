// TODO: Include packages needed for this application
// Gets Inquirer package from package.json.
import inquirer from 'inquirer';
// Node fs (file system) is a node module that comes with node.
import fs from 'node:fs';
// Import generateMarkdown is grabbing the function from the .js file.
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
// This array is what is displayed when ran, it prompts the user for several inputs that are later used.
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
    {
        type: 'list',
        // type: defines what prompt will be given to the user.
        message: 'License the project uses.',
        // message: provides user with description of what their needing to input.
        name: 'license',
        // name sets this "object" to be able to be called upon.
        choices: ['MIT', 'Apache', 'GPL', 'N/a'],
        // added based off type: 'list' to give choices
        validate: licenseInput => {
        // validates wether there was a valid input or not.
            if (licenseInput) {
                return true;
            } else {
                return 'Select a license.';
            }
        }
    },
    {
        type: 'input',
        // type: input is mainly used, it is prompting the user for a string input.
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
// Using node:fs, we are creating a function that will allow us to create the README.md file. This will be called on later.
function writeToFile(fileName, data) {
    // fileName, sets the name of the file. Data is how it is going to be "formatted". (err) is what will be thrown if the arguments are not valid/met.
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('README file has been created successfully!');
        }
    });
};

// TODO: Create a function to initialize app
// this function uses inquirer to pronpt the user, then it will grab the answers.
function init() {
    inquirer.prompt(questions).then((answers) => {
        // declaring variables that will be used to create README.md
        const markdownContent = generateMarkdown(answers);
        // generateMarkdown function is being called in combination with the responses we recived from the inquirer.
        const readme = 'README.md';
        // setting the type of file being created.
        writeToFile(readme, markdownContent);
        // calling writeToFile to finally create the .md, using the answers from inqirer and setting the file type.
    })
        .catch((error) => {
            // .catch will throw an error if there is any issue compiling the file.
            console.error('Error initializing application:', error);
        });
};

// Function call to initialize app
init();