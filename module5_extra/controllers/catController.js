const catList = require("../libraries/catLibrary");
const cats = require("../libraries/catLibrary");

const createNewCatList = (req, res) => {
    res.status(200);
    res.json(catList.cats);
};

module.exports = {
    createNewCatList
  };

