"use strict";

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

console.log(myString.length);

myString = myString.replace(/,/g, " ");
console.log(myString);

/*References
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace 
https://www.lynda.com/JavaScript-tutorials/Properties-methods-arrays/574716/612037-4.html?autoplay=true
* String.replace()
* .indexOf
* all string mehods() found on the link below
https://www.w3schools.com/js/js_string_methods.asp
*/
