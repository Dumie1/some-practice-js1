
'use strict';
const o1 = { foo: 'bar' };
const o2 = { foo: 'bar' };
const o3 = o2;

console.log('o1', o1, 'o2', o2, 'o3', o3);

o1.foo = 'baz';
console.log('o1', o1, 'o2', o2, 'o3', o3);

o2.foo = 'hyf';
console.log('o1', o1, 'o2', o2, 'o3', o3);

/*Making a change to o1 does not affect o3 because they both have no relation to each other.
variable 01 has different values to that of variable 03.
*/

/*Making changes to o2 does affect o3 because 02 is a value of variable 03.
const 03 has been declared byy the value of 02.
*/

/*o3 is a reference to o2. So, the values inside the object are
 shared between o2 and o3.*/
