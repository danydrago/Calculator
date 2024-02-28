import { question } from 'readline-sync';

type Op = '+' | '-' | '*' | '/';

function main(): void {

    const firstString: string = question("Enter first  number: \n");
    const operator: string = question("Enter operator: \n");
    const secondString: string = question("Enter second  number: \n");

    const validInput: boolean = isNumber(firstString) && isNumber(secondString) && isOperator(operator)

    if (validInput) {
        //converto a numero gli operatori
        const firstNum: number = parseInt(firstString);
        const secondNum: number = parseInt(secondString);
        const result = calculate(firstNum, operator as Op, secondNum);
        console.log('The result is: ' + result);
    }
    else {
        console.log('\n You have inserted an invalid input. Try again  \n');
    }

}
//This function performs the calculation 
function calculate(firstNum: number, operator: Op, secondNum: number) {

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
function isNumber(str: string): boolean {
    const mayBeNum = parseInt(str);
    const isNum: boolean = !isNaN(mayBeNum);
    return isNum;
}

//Check if the input entered by the user is an operator
function isOperator(operator: string): boolean {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true
        default: return false
    }
}

main()