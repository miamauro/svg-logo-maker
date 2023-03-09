//Import Inquirer, fs, and necessary classes.
const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Square, Triangle } = require("./lib/shapes");

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
  //Create new shape based on user input.
  .then((data) => {
    let shape = "";
    if (data.shape === "circle") {
      shape = new Circle();
    } else if (data.shape === "square") {
      shape = new Square();
    } else {
      shape = new Triangle();
    }
    //Set shape color and text based on user input.
    shape.setColor(data.shapeColor);
    shape.setText(data.text);
    //Generate svg file within examples folder. If unsuccessful, display error; otherwise, display message "Generated logo.svg".
    fs.writeFile(
      "./examples/logo.svg",
      shape.render(data.textColor),
      (error) => {
        error ? console.log(error) : console.log("Generated logo.svg");
      }
    );
  });
