// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')


const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = [

    {
        type: 'input',
        name: 'title',
         message: 'What is the title of the project?',
        validate: titleInput => {
             if(titleInput) {
                 return true;
            }else {
                console.log('Provide the Title of your project!')
                return false;
             }
        }
    }, {
        type: 'input',
        name: 'description',
        message: 'What is the project about? Provide a detailed descirption.',
        validate: descriptionInput => {
            if(descriptionInput) {
                    return true;
                }else {
                    console.log('Describe what your project is about.')
                 return false;
             }
        }
    },  {
        type: 'input',
        name: 'contents',
        message: 'Table of Contents.',
        validate: contentsInput=> {
            if(contentsInput) {
                 return true;
            }else {
                console.log('What does the project consist of?')
                return false;
             }
        }
    },  {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to install in order to access your application (ie... dependencies)?',
        validate: installationInput => {
            if(installationInput) {
                return true;
            }else {
                console.log('What additional requirements are needed to access your application?')
                return false;
            }
        }
    },  {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions to the user for the applications intended purpose?',
        validate: usageInput=> {
            if(usageInput) {
                return true;
            }else {
                console.log('You must provide information to continue!')
                return false;
            }
        }
    },  {
        type: 'list',
        name: 'license',
        message: 'What license is being used?',
        choices: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of the above'],
        validate: licenseInput => {
            if(licenseInput) {
                return true;
            }else {
                console.log('Which license did you use?')
                return false;
            }
        }
    },  {
        type: 'input',
        name: 'contributions',
        message: 'Who has contributed to this project?',
        validate: contributionsInput => {
            if(contributionsInput) {
                return true;
            }else {
                console.log('List all whom helped in the creation / implementation of this project')
                return false;
            }
        }
    },  {
        type: 'input',
        name: 'commands',
        message: 'What commands are needed to test this app?',
        validate: commandsInput => {
            if(commandsInput) {
                return true;
            }else {
                console.log('Enter the commands needed to test this application')
                return false;
            }
        }
    },  {
        type: 'input',
        name: 'contact',
        message: 'Contact info for inquiries?',
        validate: contactInput  => {
            if(contactInput) {
                return true;
            }else {
                console.log('Provide your contact info if you would like to leave a way for users to reach out to you')
                return false;
            }
        }
    },  {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
        validate: githubInput => {
            if(githubInput) {
                return true;
            }else {
                console.log('Enter your github username')
                return false;
            }
        }
    },  {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if(emailInput) {
                return true;
            }else {
                console.log('Enter your email address')
                return false;
            }
        }
    }
];

writeToFile = (fileName, answers) => {
    fs.writeFile(fileName, answers, (err) => {
        if(err) {
            return console.log(err);
        }
        console.log('Success! README file is now ready.')
    })
}
   


init = () => {
    inquirer.prompt(questions)
    .then(function(answers) {
        console.log(answers)
        writeToFile('README.md', generateMarkdown(answers));
    });
};

// // Function call to initialize app
init();
