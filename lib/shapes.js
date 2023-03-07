class Shape {
  constructor(data) {
    this.color = "";
  }
  setColor(shapeColor) {
    this.color = shapeColor;
  }
}

class Circle extends Shape {
  render(textColor, text) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="100" fill="${this.color}" /> <text x="100" y="120" font-size="70" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  render(textColor, text) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.color}" /> <text x="100" y="120" font-size="70" text-anchor="middle" fill="${textColor}">${text}</text>
        </svg>`;
  }
}

class Triangle extends Shape {
  render(textColor, text) {
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="150 0, 30 200, 270 200" fill="${this.color}" /> <text x="150" y="150" font-size="70" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>`;
  }
}

module.exports = { Circle, Square, Triangle };
