/*var express = require("express");
var router = express.Router();
router.get("/add", (req, res) => {
  let number1 = parseInt(req.query.num1);
  let number2 = parseInt(req.query.num2);
  let output = number1 + number2;
  console.log(output);
  res.status(200);
  res.json({ result: output });
});

module.exports = router;*/

var express = require("express");
var additionController = require("../controllers/additionController");
var router = express.Router();
router.get("/add", (req, res) => {
    additionController.add(req, res);
});
module.exports = router;
