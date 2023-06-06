/*var express = require("express");
var router = express.Router();
router.get("/multiply", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let output = number1 * number2;
  console.log(output);
  res.status(200);
  res.json({ result: output });
});

module.exports = router;*/

var express = require("express");
var multiplicationController = require("../controllers/multiplicationController");
var router = express.Router();
router.get("/multiply", (req, res) => {
  multiplicationController.multiply(req, res);
});
module.exports = router;