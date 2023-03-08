//Write a test for rendering each shape with a color
const { Circle } = require("./shapes");

describe("Circle", () => {
  describe("render", () => {
    it("should render svg for a circle with 'hii' inside, written in white", () => {
      const generatedCir = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="100" fill="" /> <text x="100" y="110" font-size="70" text-anchor="middle" fill="white">hii</text>
      </svg>`;
      const shape = new Circle();
      expect(shape.render("white", "hii")).toMatch(generatedCir);
    });
  });
});

//Write a test that throws an error if text.length > 3
