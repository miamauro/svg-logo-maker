const inquirer = require("inquirer");
const fs = require("fs");

//Array of questions to display to user in command-line.
inquirer
  .prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text for the logo (3 characters max):",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a text color:",
    },
    {
      type: "list",
      name: "shape",
      message: "Select a shape for the logo:",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter a shape color:",
    },
  ])
  .then((data) => {
  });
