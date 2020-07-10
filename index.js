var inquirer = require("inquirer");

inquirer
  .prompt([
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
        type: "checkbox",
        message: "What kind of license do you want?",
        name: "stack",
        choices: [
          "None", 
          "MIT", 
          "Placeholder", 
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
        message: "Do you want to include any Gifs??",
        name: "addGIF"
    },
  ])
  .then(function(response) {
    console.log(response)

    // if (response.confirm === response.password) {
    //   console.log("Success!");
    // }
    // else {
    //   console.log("You forgot your password already?!");
    // }
  });