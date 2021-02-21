const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

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
    // array ? [Employee, Engineer, Manager, Intern]
    const response = new Employee (answers);
    // renderLicenseBadge
    console.log(typeof response);
    //make output folder "./output/README.md"
    writeToFile('./dist/index.html', JSON.stringify(response));
  });
}

// Function call to initialize app
init();