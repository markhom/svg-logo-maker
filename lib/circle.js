const Shape = require('./shapes.js')

// Render Circle using svg literal template

class Circle extends Shape { 
    constructor(shapeColor, text, textColor) {
        super(shapeColor, text, textColor);
    };
    render() {
        return  `
        <svg version="1.1"
            width="300" height="200"
            xmlns="https://www.w3.org/TR/SVG2/">
            <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
            <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>
        `
    };
};

module.exports = Circle;