// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
let questions = () =>
  inquirer.prompt([
    {
      name: "dev_name",
      type: "input",
      message: "Enter your full name: ",
    },
    {
      name: "year",
      type: "input",
      message: "Enter the current year: ",
    },
    {
      name: "title",
      type: "input",
      message: "What would you like to name your project?",
    },
    {
      name: "description",
      type: "input",
      message: "Write a short description for this project: ",
    },
    {
      name: "install_instructions",
      type: "input",
      message: "How do you install this project?",
    },
    {
      name: "usage_information",
      type: "input",
      message: "How do you use this project?",
    },
    {
      name: "contribution_guidelines",
      type: "input",
      message: "What are the contribution guidelines?",
    },
    {
      name: "test_instruction",
      type: "input",
      message: "How would you test this project?",
    },
    {
      name: "license",
      type: "list",
      message: "Select the license",
      choices: ["MIT", "APACHE", "GPL", "BSD", "Public Domain",],
    },
    {
      name: "questions",
      type: "input",
      message: "Where can you be contacted?",
    },
  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("README.MD has been generated.");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  questions().then((answer) => {
    writeToFile("README.md", generateMarkdown(answer));
  });
}

// Function call to initialize app
init();
