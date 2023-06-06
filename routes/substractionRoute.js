/*var express = require("express");
var router = express.Router();
router.get("/substract", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let output = number1 - number2;
  console.log(output);
  res.status(200);
  res.json({ result: output });
});

module.exports = router;*/

var express = require("express");
var substractionController = require("../controllers/substractionController");
var router = express.Router();
router.get("/substract", (req, res) => {
    substractionController.substract(req, res);
});
module.exports = router;