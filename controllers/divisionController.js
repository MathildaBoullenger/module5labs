const divide = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let output = number1 / number2;
    console.log(output);
    res.status(200);
    res.json({ result: output });
    }
  
    module.exports = {
      divide
      }