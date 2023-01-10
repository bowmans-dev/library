const fs = require("fs");

const employees = []

  const bowman = ({
    "name": "bowman",
    "salary": 0,
    "id": 1001
  })
  const jeff = ({
    "name": "jeff",
    "salary": 29000000000,
    "id": 1002  
  });
  const grover = ({
    "name": "grover",
    "salary": 75000,
    "id": 1003
  });
  employees.push(bowman, jeff, grover);

fs.writeFileSync("json_data.json", JSON.stringify(employees));