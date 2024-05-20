const Square = require('../square.js');

describe('Square', () => {
    it('should return logo with user choice of shape color, tex, and text color', () => {
        const square = new Square('red','EKO','yellow');
        expect(square.render()).toEqual(`
        <svg version="1.1"
            width="300" height="200"
            xmlns="https://www.w3.org/TR/SVG2/">
            <rect width="200" height="200" fill="red"/>
            <text x="100" y="125" font-size="70" text-anchor="middle" fill="yellow">EKO</text>
        </svg>
        `
        );
    });
});