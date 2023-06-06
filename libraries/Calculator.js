//Exercise 6 -Part 1

class Calculator {
    constructor() {
        this.id = Math.random(); //Exercise 6 - Part 2. Library used in calculatorController
    }
    #log = (value) => {
        console.log(`[Calculator
    :${this.id}]:${value}`);
    };
    add(num1, num2) {
        const value = num1 + num2;
        this.#log(value);
        return value;
    }
    multiply(num1, num2) {
        const value = num1 * num2;
        this.#log(value);
        return value;
    }
    subtract(num1, num2) {
        const value = num1 - num2;
        this.#log(value);
        return value;
    }
    divide(num1, num2) {
        const value = num1 / num2;
        this.#log(value);
        return value;
    }

}
module.exports = Calculator;
