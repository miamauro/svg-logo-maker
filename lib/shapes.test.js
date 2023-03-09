//Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
//Write a test for each shape class testing the render() method with passed color? Is that what the above requirement expects?
const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  describe("render", () => {
    it("should render a pink svg circle with 'aaa' inside, written in purple", () => {
      const generatedCircle = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="pink"/><text x="100" y="110" font-size="70" text-anchor="middle" fill="purple">aaa</text></svg>`;
      const shape = new Circle();
      shape.setColor("pink");
      shape.setText("aaa");
      expect(shape.render("purple")).toEqual(generatedCircle);
    });
  });
});

describe("Square", () => {
  describe("render", () => {
    it("should render a green svg square with 'bbb' inside, written in blue", () => {
      const generatedSquare = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="green"/><text x="100" y="115" font-size="70" text-anchor="middle" fill="blue">bbb</text></svg>`;
      const shape = new Square();
      shape.setColor("green");
      shape.setText("bbb");
      expect(shape.render("blue")).toEqual(generatedSquare);
    });
  });
});

describe("Triangle", () => {
  describe("render", () => {
    it("should render a black svg triangle with 'ccc' inside, written in white", () => {
      const generatedTriangle = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 0, 30 200, 270 200" fill="black"/><text x="150" y="150" font-size="70" text-anchor="middle" fill="white">ccc</text></svg>`;
      const shape = new Triangle();
      shape.setColor("black");
      shape.setText("ccc");
      expect(shape.render("white")).toEqual(generatedTriangle);
    });
  });
});

describe("Shape", () => {
  describe("setText", () => {
    it("should return a red svg circle without text because text input > 3 characters", () => {
      const noTextLogo = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="red"/><text x="100" y="110" font-size="70" text-anchor="middle" fill="white"></text></svg>`;
      const shape = new Circle();
      shape.setColor("red");
      shape.setText("hello");
      expect(shape.render("white")).toEqual(noTextLogo);
    });
  });
});
