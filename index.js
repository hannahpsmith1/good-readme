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
    {
        type: "input",
        message: "Please write a short description of your project?",
        name: "projectDesc"
    },
    {
        type: "input",
        message: "Link to Deployed Project",
        name: "deployed"
    },
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
        message: "Questions?",
        name: "questions"
    },
    {
        type: "input",
        message: "Do you want to include any Gifs??",
        name: "addGIF"
    },
  ]

;

function writeToFile(fileName, data) {
    fs.writeFileSync("goodREADME.md", data )
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
