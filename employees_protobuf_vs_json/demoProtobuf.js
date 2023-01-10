const Schema = require("./employees__pb"); // SET BREAKPOINT [F9] Run & Debug -> Step Through In The DEBUG CONSOLE [F10]
const fs = require("fs");

const bowman = new Schema.Employee();
const jeff = new Schema.Employee();
const grover = new Schema.Employee();
const employees = new Schema.Employees();


bowman.setId(1001);
bowman.setName("bowman");
bowman.setSalary("0");

jeff.setId(1002);
jeff.setName("jeff");
jeff.setSalary("29000000000");

grover.setId(1003);
grover.setName("grover");
grover.setSalary("75000");

employees.addEmployees(bowman);
employees.addEmployees(jeff);
employees.addEmployees(grover);

const bytes = employees.serializeBinary();
fs.writeFileSync("employees_binary", bytes)

employeesBinary = Schema.Employees.deserializeBinary(bytes);

let n = jeff.getSalary();
let str1 = n.toLocaleString("en-US");
let o = grover.getSalary();
let str2 = o.toLocaleString("en-US");

new Array(3).fill(0).forEach(employees => console.log(`%cEmployees`, "color: white; background: dodgerblue; border-radius: 25px;"));
console.log("   ");
console.log(jeff.getName() + " makes $" + str1);
console.log(grover.getName() + " makes $" + str2);
console.log(bowman.getName() + " makes £" + bowman.getSalary());

console.group();
console.log(bowman);
console.log(jeff);
console.log(grover);

console.group();
console.log({jeff});
console.log({grover});
console.log({bowman});
console.groupEnd();
console.groupEnd();