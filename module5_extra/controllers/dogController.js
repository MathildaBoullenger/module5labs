const dogList = require("../libraries/dogLibrary")

const createNewDogList = (req, res) => {
    res.status(200);
    res.json(dogList.dogs);
};

module.exports = {
    createNewDogList
  };
