
'use strict';

const x = [1, 2, 3];
const y = [1, 2, 3];
const z = y;

if (x == y) {
  console.log('x & y are equal using ==');
} else {
  console.log('x & y are not equal using ==');
}

if (x === y) {
  console.log('x & y are equal using ===');
} else {
  console.log('x & y are not equal using ===');
}

if (z === y) {
  console.log("z & y are equal using ===");
} else {
  console.log("z & y are not equal using ===");
}

if (x === z) {
  console.log("x & z are equal using ===");
} else {
  console.log("x & z are not equal using ===");
}
