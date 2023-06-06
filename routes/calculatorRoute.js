//Exercise 2 - Full calculator route

/*var express = require("express");
var router = express.Router();
router.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let operator = req.query.operator;
  let output;

    switch (operator) {
        case "%2B": output = number1 + number2;
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
});

module.exports = router;*/

//Exercise 5

var express = require("express");
var calculatorController = require("../controllers/calculatorController");
var router = express.Router();
router.get("/calculate", (req, res) => {
    calculatorController.calculate(req, res);
});
module.exports = router;
