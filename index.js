const fs = require('fs');
const inquirer = require('inquirer');

// add input questiions here 
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your title within the company?'
    },
    {
      type: 'list',
      name: 'name',
      message: 'How can you best be reached?',
      choices: ['email', 'phone', 'linkedin', 'other']

    },
    
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

// create function to write to file 

// create function to initialize app 

// init