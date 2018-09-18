'use strict';

function printObject(obj) {
    for (key in obj) {
        console.log(key + ' = ' + obj[key]);
    }
}

const person = {
    firstName: "Maartje",
    lastName: "Kruijt",
    city: "Amsterdam"
};

console.log(printObject(person));

/* References below eg feedback from mentors

https://github.com/Dumie1/hyf-javascript1/issues/2
*/
