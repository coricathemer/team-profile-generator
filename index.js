const fs = require('fs');
const inquirer = require('inquirer');
const employee = require('./lib/Employee');
const engineer = require('./lib/Engineer');
const manager = require('./lib/Manager');
const intern = require('./lib/Intern');

// add input questiions here 
const questions = [
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'role',
      message: 'What is your role within the company?'
    },
    {
      type: 'list',
      name: 'contact',
      message: 'How can you best be reached?',
      choices: ['email', 'phone', 'linkedin', 'other']

    },
    
  ]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    } 
    console.log('Team profile was created!!');
  });
}

// TODO: Create a function to initialize app
function init() {
  console.log('Please answer the following questions:')
  inquirer.prompt(questions).then((answers) => {
    // pass in responses from user to the correct role file
    const response = lib (answers);
    // renderLicenseBadge
    console.log(answers);
    //make output folder "./output/README.md"
    writeToFile('../dist/index.html')
  });
}

// Function call to initialize app
init();