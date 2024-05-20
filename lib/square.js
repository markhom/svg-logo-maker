const Shape = require('./shapes.js')

// Render Square using svg literal template
class Square extends Shape {
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return `
        <svg version="1.1"
            width="300" height="200"
            xmlns="https://www.w3.org/TR/SVG2/">
            <rect width="200" height="200" fill="${this.shapeColor}"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Square;