"use strict";

//Yes it is possible to store multiple types in an array, Numbers and strings as shown below.
let elements = [1,"Hello","Dumie, you are", 15, ];
console.log(elements);
//Yes you can compare infinities as shown below
let num = 6/0;
let x = 10/0;
console.log("Expected answer is true");
console.log(num === num);
console.log(num === x);
console.log(x === x);
// reference -> https://developer.mozilla.org/nl/docs/Web/JavaScript/Equality_comparisons_and_sameness
