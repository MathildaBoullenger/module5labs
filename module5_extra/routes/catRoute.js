var express = require("express");
var catController = require("../controllers/catController");
var router = express.Router();
router.get("/", (req, res) => {
    catController.createNewCatList(req, res);
});

module.exports = router;