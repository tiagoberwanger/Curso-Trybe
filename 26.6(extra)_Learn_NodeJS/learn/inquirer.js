const inquirer = require('inquirer')

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  },
  {
    type: 'number',
    name: 'age',
    message: "What's your age?"
  },
  {
    type: 'input',
    name: 'profession',
    message: "What's your profession?"
  }, 
  {
    type: 'password',
    name: 'password',
    message: "What's your password?"
  }
]

inquirer.prompt(questions).then(answers => {
  console.log(`Hi, my name is ${answers['name']}. I'm ${answers['age']} old, and I'm a ${answers['profession']}!`);
})