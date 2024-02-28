# Calculator

This is a simple calculator written in Typescript.

To run the project, you need to have node.js and typescript installed on your system. Also, you need to install two npm packages: readline-sync and @types/readline-sync. The former allows you to interact with the user via the console, the latter provides the type definitions for the former. You can find these two packages here:

- [readline-sync](https://www.npmjs.com/package/readline-sync)
- [@types/readline-sync](https://www.npmjs.com/package/@types/readline-sync)

The operation of the calculator is as follows:

- From the terminal, the user is asked to enter two numbers and an arithmetic operator (+, -, *, /).
- If the inputs are valid, the calculation is performed and the result is shown.
- If the inputs are not valid, an error message is shown.
- The validity of the inputs is verified by the functions isNumber and isOperator, which check if the input is a number or an arithmetic operator, respectively. Inputs with commas or parentheses are not accepted.

To convert the input strings into numbers, the function parseInt is used, which returns an integer or NaN if the string is not a valid number.
