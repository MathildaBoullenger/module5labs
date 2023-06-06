var express = require("express");
var catController = require("../controllers/dogController");
var router = express.Router();
router.get("/", (req, res) => {
    catController.createNewDogList(req, res);
});

module.exports = router;