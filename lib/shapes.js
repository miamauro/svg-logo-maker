class Shape {
  constructor(data) {
    this.color = "";
    this.text = "";
  }
  setColor(shapeColor) {
    this.color = shapeColor;
  }
  setText(text) {
    if (text.length <= 3) {
      this.text = text;
    } else {
      this.text = "";
      console.log(
        "If logo generation is successful (see below), your text input will not appear. Please regenerate with text input of 3 characters or less."
      );
    }
  }
}

class Circle extends Shape {
  render(textColor) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="100" fill="${this.color}"/><text x="100" y="110" font-size="70" text-anchor="middle" fill="${textColor}">${this.text}</text></svg>`;
  }
}

class Square extends Shape {
  render(textColor) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${this.color}"/><text x="100" y="115" font-size="70" text-anchor="middle" fill="${textColor}">${this.text}</text></svg>`;
  }
}

class Triangle extends Shape {
  render(textColor) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150 0, 30 200, 270 200" fill="${this.color}"/><text x="150" y="150" font-size="70" text-anchor="middle" fill="${textColor}">${this.text}</text></svg>`;
  }
}

module.exports = { Circle, Square, Triangle };
