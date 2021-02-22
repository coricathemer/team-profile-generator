const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const generateHtml = require('./lib/generateHtml');

// add input questiions here 
const manager = [
  {
    type: 'input',
    name: 'managerName',
    massage: 'Please enter your full name:'
  },
  {
    type: 'input',
    name: 'id',
    massage: 'Please provide your employee ID number:'
  },
  {
    type: 'input',
    name: 'email',
    massage: 'Enter your work email:'
  },
  {
    type: 'input',
    name: 'officeNumber',
    massage: 'What is your office number, please include the extension if applicable:'
  },

] 

const teamBuilder = [
  {
    type: 'list',
    name: 'teamMember',
    message: 'Additonal team members:',
    choices: ['Engineer', 'Intern', 'No additonal members to add']
  }
]

const engineer = [
  {
    type: 'input',
    name: 'employeeName',
    massage: 'Please enter your full name:'
  },
  {
    type: 'input',
    name: 'id',
    massage: 'Please provide your employee ID number:'
  },
  {
    type: 'input',
    name: 'email',
    massage: 'Enter your work email:'
  },
  {
    type: 'input',
    name: 'github',
    massage: 'What is your GitHub username?'
  },

] 

const intern = [
  {
    type: 'input',
    name: 'employeeName',
    massage: 'Please enter your full name:'
  },
  {
    type: 'input',
    name: 'id',
    massage: 'Please provide your employee ID number:'
  },
  {
    type: 'input',
    name: 'email',
    massage: 'Enter your work email:'
  },
  {
    type: 'input',
    name: 'school',
    massage: 'What is the name of the school you are currently attending?'
  },

] 

const managerPrompt = () => {
  return inquirer.prompt(manager)
  .then(ManagerAnswers => {
    const team = [];
    team.push( new Manager(`${ManagerAnswers.employeeName}`, `${ManagerAnswers.id}`, `${ManagerAnswers.email}`, `${ManagerAnswers.officeNumber}` ));
    return team;
  })
}

const teamBuilderPrompt = () => {
  return inquirer.prompt(teamBuilder)
}

const engineerPrompt = () => {
  return inquirer.prompt(engineer)
}

const internPrompt = () => {
  return inquirer.prompt(intern)
}

const buildTeam = (team) => {
  return inquirer.prompt(teamBuilder)
  .then(answer => {
    if (`${answer.teamMember}` === 'Engineer') {
      return inquirer.prompt(engineer)
      .then(EngineerAnswers => {
        team.push(new Engineer(`${EngineerAnswers.employeeName}`, `${EngineerAnswers.id}`, `${EngineerAnswers.email}`, `${EngineerAnswers.github}`));
        return buildTeam(team)
      })
    } else if (`${answer.teamMember}` === 'Intern') {
      return inquirer.prompt(intern)
      .then(InternAnswers => {
        team.push(new Intern(`${InternAnswers.employeeName}`, `${InternAnswers.id}`, `${InternAnswers.email}`, `${InternAnswers.school}`));
        return buildTeam(team)
      })
    } else return team;
  })
};


// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'Open index.html in browser to see employee files'
      });
    });
  });
};

managerPrompt()
.then(team => {
  return buildTeam(team);
})
.then(fullTeam => {
  return generateHtml(fullTeam);
})
.then(display => {
  return writeToFile('./dist/index.html', display);
})
.catch(err => {
  console.log(err);
});
// TODO: Create a function to initialize app
// function init() {
  // console.log('Please answer the following questions:')
  // inquirer.prompt(questions).then((answers) => {
    // pass in responses from user to the correct role file
    // array ? [Employee, Engineer, Manager, Intern]
    // const response = new Employee (answers);
    // renderLicenseBadge
    // console.log(typeof response);
    //make output folder "./output/README.md"
    // writeToFile(generateHtml, JSON.stringify(response));
  // });
// }

// Function call to initialize app
// init();