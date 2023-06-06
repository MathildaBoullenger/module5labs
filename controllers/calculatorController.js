const Calculator = require('../libraries/Calculator')
const Logger = require('../libraries/Logger') //Exercise 6 - Part 3

const calculate = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let operator = req.query.operator;

    const calculator = new Calculator();
    const logger = new Logger(); //Exercise 6 - Part 3
    let output;

  switch (operator) {
    case "+": //will request as %2B in the url
      output = calculator.add(number1, number2);
      break;
    case "*":
      output = calculator.multiply(number1, number2);
      break;
    case "-":
      output = calculator.subtract(number1, number2);
      break;
    case "/":
      output = calculator.divide(number1, number2);
      break;
    default:
      output = "Invalid operator";
  }
 
  console.log(output);
  logger.log('Calculation carried out sucessfully :)'); //Exercise 6 - Part 3
  res.status(200);
  res.json({ result: output });
};

module.exports = {
  calculate
};
    
//Old code below, before use of library  
      /*switch (operator) {
          case "%2B": output = number1 + number2; //we need to encode the + so it can be used correctly through the url
              break;
          case "*": output = number1 * number2;
              break;
          case "-": output = number1 - number2;
              break;
          case "/": output = number1 / number2;
              break;
          default:
              output = "Invalid operator";
      }
  
    console.log(output);
    res.status(200);
    res.json({ result: output });
  }

  module.exports = {
    calculate
    }*/
