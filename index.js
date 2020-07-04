const inquirer = require('inquirer');
const generateFile = require('./readme-template');
const fs = require('fs');

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
        message: 'What is the name of your project?',
        validate: name => {
            if (name) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: descripton => {
            if (descripton) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
      },
      {
        type: 'checkbox',
        name: 'installation',
        message: 'What did you this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use this application?',
        validate: usage => {
            if (usage) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
      },
      {
        type: 'confirm',
        name: 'contributors',
        message: 'Did you have any contributors on this project?',
        default: false
      },
      {
        type: 'input',
        name: 'contributorsTrue',
        message: 'Please list Who worked on this project:',
        when: ({ contributors }) => contributors,
        validate: contributorsTrue => {
            if (contributorsTrue) {
              return true;
            } else {
              console.log('Please enter a  contributor!');
              return false;
            }
          }
      },
      {
        type: 'list',
        name: 'license',
        message: 'What kind of license are you using?',
        choices: ['Apache', 'MIT', 'GNU']
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: github => {
            if (github) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
        validate: email => {
            if (email) {
              return true;
            } else {
              console.log('Please enter your name!');
              return false;
            }
          }
      }
    ]);
  };
  
  promptReadme()
  .then(readmeData => {
     const pageHTML = generateFile(readmeData);

     fs.writeFile('./readme.md', pageHTML, err => {
       if (err) throw new Error(err);

       console.log('Page created! Check out readme.md in this directory to see it!');
     });
  });
