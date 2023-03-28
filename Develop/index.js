// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'title?',
        validate: titleInput => {
            if(titleInput) {
                return true;
            }else{console.log('enter title');
        return false;
    }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'git username?',
            validate: githubInput => {
                if(githubInput) {
                    return true;
                }else{console.log('enter git username');
            return false;
        }
                }
            },
            {
                type: 'input',
                name: 'what',
                message: 'What is this project?',
                validate: whatInput => {
                    if(whatInput) {
                        return true;
                    }else{console.log('enter project');
                return false;
            }
                    }
                },
                 {
                type: 'input',
                name: 'why',
                message: 'Why did you make this project?',
                validate: whyInput => {
                    if(whyInput) {
                        return true;
                    }else{console.log('enter why you made this project');
                return false;
            }
                    }
                },
                {
                    type: 'input',
                    name: 'how',
                    message: 'How did you makethis project?',
                    validate: howInput => {
                        if(howInput) {
                            return true;
                        }else{console.log('enter how you made this project');
                    return false;
                }
                        }
                    },
                    {
                        type: 'input',
                        name: 'install',
                        message: 'Provide install instructions',
                        validate: installInput => {
                            if(installInput) {
                                return true;
                            }else{console.log('Provide install instructions');
                        return false;
                    }
                            }
                        },
                        {
                            type: 'input',
                            name: 'usage',
                            message: 'How to use.',
                            validate: usageInput => {
                                if(usageInput) {
                                    return true;
                                }else{console.log('How do I use?');
                            return false;
                        }
                                }
                            },
                            {
                                type: 'list',
                                name: 'license',
                                message: 'Which license will you use for your project?',
                                choices: ['mit', 'no license']
                            },
                            {
                                type: 'input',
                                name: 'test',
                                message: 'How to test',
                                validate: testInput => {
                                    if (testInput) {
                                        return true;
                                    }else {
                                        console.log('How do I test?');
                                return false;
                                    }
                                }
                            }


        
    
];

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/new-README.md', fileContent, err =>{
            if (err) {
                reject(err);
                return;
            }
            resolve({ok: true, message:'file created'
        });
        });
    });
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions)
    .then(readmeData => {return readmeData;})
}

// Function call to initialize app
init()
.then(readmeData => {
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(pageMD => {
    return writeFile(pageMD);
})
.then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
.catch(err =>{console.log(err);
})
