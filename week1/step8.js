"use strict";

const manager = true;
console.log( "John is a manager:" + manager);
console.log("The variable type is a boolean");
console.log(typeof manager);

const salary = null;
console.log("The salary of manager is :" + salary);
console.log("The variable type is an object");
console.log(typeof salary);

const managerName = "John";
console.log("The name of the manager is : " + managerName);
console.log("The variable type is a string");
console.log(typeof managerName);

const age = 40;
console.log("The manager is aged :" + age);
console.log("The variable type is a number");
console.log(typeof age);

if ( typeof managerName === typeof age) {
        console.log("Same type");
}
else{
  console.log("Different types");
}


if ( typeof manager === typeof salary) {
    console.log("Same type");
}
else{
    console.log("Different types");
}
