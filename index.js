const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown.js");
const fs = require ("fs");

const questions = [
    {
      type: "input",
      message: "What is your github username?",
      name: "githubname"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your projectName?",
        name: "projectName"
    },
    // badge
    {
        type: "input",
        message: "Please write a short description of your project?",
        name: "projectDesc"
    },
    // Something about table of Contents
    {
        type: "list",
        message: "What kind of license do you want?",
        name: "license",
        choices: [
          "None", 
          "MIT", 
          "GLP", 
          "Placeholder"
        ]
    },
    // license code 
    {
        type: "input",
        message: "What commands should be run to install dependences?",
        name: "dependencies"
    },
    {
      type: "input",
      message: "What commands should be run to test?",
      name: "testCommands"
    },
    {
        type: "input",
        message: "What does the user need to know to run the repository?",
        name: "repoKnowledge"
    },
    {
        type: "input",
        message: "What does the user need to know to contribute to the repository?",
        name: "repoContribute"
    },
    {
        type: "input",
        message: "Do you want to include any Gifs??",
        name: "addGIF"
    },
  ]

;

function writeToFile(fileName, data) {
    fs.writeFileSync("squirrel.md", data )
    // console.log("write", fileName, data)
}

function init() {
    // console.log(generate)
    inquirer
    .prompt(questions).then(function(response) {
        console.log(response);
    writeToFile("README.md",generate(response))
    
      });

}

init();
