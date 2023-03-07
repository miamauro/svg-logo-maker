const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");
// const Svg = require("./lib/svg");

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
    let shape = "";
    if (data.shape === "circle") {
      shape = new Circle();
    } else if (data.shape === "square") {
      shape = new Square();
    } else {
      shape = new Triangle();
    }
    shape.setColor(data.shapeColor);

    fs.writeFile(
      "logo.svg",
      shape.render(data.textColor, data.text),
      (error) => {
        error ? console.log(error) : console.log("Generated logo.svg");
      }
    );
  });
