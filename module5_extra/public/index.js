const express = require('express');

const app = express();
const port = 3001;

//create an app using the express
var catRoute = require("../routes/catRoute");
var dogRoute = require("../routes/dogRoute");

app.use("/catAPI", catRoute);
app.use("/dogAPI", dogRoute);

app.listen(port, () => {
    console.log(`Cat API listening at http://localhost:${port}`);
});

// the cat API will be accessible through the following url: localhost:3001/catAP
// the dog API will be accessible through the following url: localhost:3001/dogAPI
