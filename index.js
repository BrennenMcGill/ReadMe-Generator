const inquirer = require('inquirer');
const generateFile = require('./readme-template');

const promptReadme = () => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Would you like to feature this project?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'Would you like to enter another project?'
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license are you using?'
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
      }
    ]);
  };
  
  promptReadme()
  .then(answers => console.log(answers))
  .then(projectAnswers => {
    const pageHTML = generateFile(projectAnswers);
  });