"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstString = (0, readline_sync_1.question)("Enter first  number: \n");
    var operator = (0, readline_sync_1.question)("Enter operator: \n");
    var secondString = (0, readline_sync_1.question)("Enter second  number: \n");
    var validInput = isNumber(firstString) && isNumber(secondString) && isOperator(operator);
    if (validInput) {
        //converto a numero gli operatori
        var firstNum = parseInt(firstString);
        var secondNum = parseInt(secondString);
        var result = calculate(firstNum, operator, secondNum);
        console.log('The result is: ' + result);
    }
    else {
        console.log('\n You have inserted an invalid input. Try again  \n');
    }
}
//This function performs the calculation 
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}
//Check if the input entered by the user is a number
function isNumber(str) {
    var mayBeNum = parseInt(str);
    var isNum = !isNaN(mayBeNum);
    return isNum;
}
//Check if the input entered by the user is an operator
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default: return false;
    }
}
main();
