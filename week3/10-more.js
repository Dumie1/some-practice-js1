'use strict';

let classHeads = {};

const teachers = [
  { firstName: 'Jim', lastName: 'Cramer'},
  { firstName: 'Unmesh', lastName: 'Joshi' },
  { firstName: 'Philipp', lastName: 'Beau' },
  { firstName: 'Hardit', lastName: 'Singh' },
];

teachers[0].language = ['JavaScript'];
teachers[1].language = ['Git', 'CLI'];
teachers[2].language = ['HTML', 'CSS'];
teachers[3].language = ['Git', 'CLI'];

console.log(teachers);
