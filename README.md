# SVG Logo Maker

## Description

The SVG Logo Maker is a command-line application that generates a simple SVG logo based on user input. Users are prompted to enter text, text color, shape, and shape color, and the application creates an SVG file named `logo.svg` with these specifications.

## Features

- **Text Input**: Users can enter up to three characters for the logo.
- **Text Color**: Users can specify the text color using a color keyword or a hexadecimal number.
- **Shape Selection**: Users can choose a shape for the logo from a list of options: circle, triangle, and square.
- **Shape Color**: Users can specify the shape color using a color keyword or a hexadecimal number.
- **SVG Output**: The application generates an SVG file named `logo.svg` based on the user inputs.
- **Output Message**: After generating the SVG file, the application prints "Generated logo.svg" to the command line.
- **SVG Display**: The generated `logo.svg` file can be opened in a browser to display a 300x200 pixel image that matches the specified criteria.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/markhom/svg-logo-maker
    ```
2. Navigate to the project directory:
    ```bash
    cd svg-logo-maker
    ```
3. Install the required dependencies:
    ```bash
    npm install
    ```

## Usage

1. Run the application:
    ```bash
    node index.js
    ```
2. Follow the prompts to enter the following information:
    - **Text**: Enter up to three characters.
    - **Text Color**: Enter a color keyword (e.g., `red`, `blue`) or a hexadecimal number (e.g., `#ff5733`).
    - **Shape**: Choose a shape from the list (circle, triangle, square).
    - **Shape Color**: Enter a color keyword or a hexadecimal number.

3. After entering all the prompts, the application will generate a file named `logo.svg` in the `examples` directory and print "Generated logo.svg" in the command line.

4. Open the `logo.svg` file in a web browser to view the logo.

## Example

```bash
$ node index.js
? Enter up to three characters: ABC
? Enter text color (keyword or hex): #ff5733
? Choose a shape: (Use arrow keys)
❯ Circle
  Triangle
  Square
? Enter shape color (keyword or hex): blue
Generated logo.svg
```
## Dependencies
- inquirer: For command-line user prompts
- fs: Built-in Node.js module for file system operations

## License 
This project is licensed under the MIT License.

## Links
Github Repository Link: https://github.com/markhom/svg-logo-maker 
