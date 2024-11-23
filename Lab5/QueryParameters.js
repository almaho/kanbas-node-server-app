export default function QueryParameters(app) {
    app.get("/lab5/calculator", (req, res) => {
      const { a, b, operation } = req.query;
  
      // Ensure a and b are provided and are numbers
      if (isNaN(a) || isNaN(b)) {
        return res.send("Invalid inputs. Please provide numbers for a and b.");
      }
  
      const numA = parseFloat(a);
      const numB = parseFloat(b);
      let result;
  
      switch (operation) {
        case "add":
          result = numA + numB;
          break;
        case "subtract":
          result = numA - numB;
          break;
        case "multiply":
          result = numA * numB;
          break;
        case "divide":
          if (numB === 0) {
            result = "Cannot divide by zero.";
          } else {
            result = numA / numB;
          }
          break;
        default:
          result = "Invalid operation. Supported operations: add, subtract, multiply, divide.";
      }
  
      res.send(result.toString());
    });
  }
  