//Exercise7

const express = require('express');
const app = express();

const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('../swagger.json');
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.listen(3000, () => {
  console.log('Swagger is running on port 3000 at endpoint /api-docs');
});

//Exercise1

// web server 1 that runs on port 3002
/*
const express = require('express') // will use this for all exercises as it needs to be defined once only in the file
const app1 = express()
const port1 = 3003
const port2 = 4002

app1.get('/', (req, res) => {
res.send('Hello World!')
})

app1.listen(port1, () => {
console.log(`Example app
listening at
http://localhost:${port1}`)
})

// web server 2 that runs on port 4002

const app2 = express()

app2.get('/', (req, res) => {
res.send('Hi there!')
})

app2.listen(port2, () => {
console.log(`Example app
listening at
http://localhost:${port2}`)
})

*/

//Exercise2

//require the express package
const app3 = express();
const port3 = 5000;

//create an app using the express
var calculatorRoute = require("../routes/calculatorRoute");

app3.use("/calculator", calculatorRoute);

app3.listen(port3, () => {
    console.log(`Calculator listening at http://localhost:${port3}`);
});

// url: http://localhost:5000/calculator/calculate?num1=xx&num2=xx&operator=XX and pass the arguments instead of xx

/*
// Exercise 3 - individual routes for each operation

// Common for all routes: (const express = require('express') is already defined in this file)
const express = require('express')

const app5 = express();
const port5 = 5001; //all operations will use different routes but the same port

//create an app using the express
var additionRoute = require("./routes/additionRoute");
app5.use("/calculator-singleoperation", additionRoute);

var substractionRoute = require("./routes/substractionRoute");
app5.use("/calculator-singleoperation", substractionRoute);

var multiplicationRoute = require("./routes/multiplicationRoute");
app5.use("/calculator-singleoperation", multiplicationRoute);

var divisionRoute = require("./routes/divisionRoute");
app5.use("/calculator-singleoperation", divisionRoute);

//In the examples above, we vind the individual calculations together using the same prefix 'calculator-singleoperation' so we can bind 

app5.listen(port5, () => {
  console.log(`Calculator listening at http://localhost:${port5}`);
});

// url: http://localhost:5001/calculator-singleoperation/add?num1=xx&num2=xx and pass the arguments instead of xx
// url: http://localhost:5001/calculator-singleoperation/substract?num1=xx&num2=xx and pass the arguments instead of xx
// url: http://localhost:5001/calculator-singleoperation/multiply?num1=xx&num2=xx and pass the arguments instead of xx
// url: http://localhost:5001/calculator-singleoperation/divide?num1=xx&num2=xx and pass the arguments instead of xx

*/

/*
// Additional test: Percentage calculator

const app4 = express();
const port4 = 6000;

// Create an app using Express
var percentageCalculatorRoute = require("./routes/percentageCalculatorRoute");

app1.use("/calculator", percentageCalculatorRoute);

// Set the port to 4000
app1.listen(port4, () => {
  console.log(`Percentage calculator listening at http://localhost:${port4}`);
});
*/
