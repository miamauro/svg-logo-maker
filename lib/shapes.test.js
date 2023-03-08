//Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
//Write a test for each shape class testing the render() method with passed color? Is that what the above requirement expects?
const { Circle, Square, Triangle } = require("./shapes");

describe("Circle", () => {
  describe("render", () => {
    it("should render an svg circle with 'hii' inside, written in purple", () => {
      const generatedCircle = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill=""/><text x="100" y="110" font-size="70" text-anchor="middle" fill="purple">hii</text></svg>`;
      const shape = new Circle();
      expect(shape.render("purple", "hii")).toEqual(generatedCircle);
    });
  });
});

describe("Square", () => {
  describe("render", () => {
    it("should render an svg square with 'yes' inside, written in yellow", () => {
      const generatedSquare = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill=""/><text x="100" y="115" font-size="70" text-anchor="middle" fill="yellow">yes</text></svg>`;
      const shape = new Square();
      expect(shape.render("yellow", "yes")).toEqual(generatedSquare);
    });
  });
});

describe("Triangle", () => {
  describe("render", () => {
    it("should render an svg triangle with 'may' inside, written in pink", () => {
      const generatedTriangle = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 0, 30 200, 270 200" fill=""/><text x="150" y="140" font-size="70" text-anchor="middle" fill="pink">may</text></svg>`;
      const shape = new Triangle();
      expect(shape.render("pink", "may")).toEqual(generatedTriangle);
    });
  });
});

//Write a test that throws an error if text.length > 3
