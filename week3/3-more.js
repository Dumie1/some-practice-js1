'use strict';

function printObject(obj) {
    return (
        "firstName = " +
        obj.firstName +
        "\n" +
        "lastName = " +
        obj.lastName +
        "\n" +
        "city = " +
        obj.city
    );
}

const person = {
    firstName: "Maartje",
    lastName: "Kruijt",
    city: "Amsterdam"
};

console.log(printObject(person));
