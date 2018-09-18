'use strict';

function vehicleType(color, code, age) {

    const vehicle = ['car', 'motorbike', 'caravan', 'bike', 'scooter'];
    const condition = ' new ';

    if (code === 1) {
        console.log('a ' + color + condition + vehicle[0]);
    } else if (code === 2) {
        console.log('a ' + color + condition + vehicle[1]);
    } else if (code === 3) {
        console.log('a ' + color + condition + vehicle[2]);
    } else if (code === 4) {
        console.log('a ' + color + condition + vehicle[3]);
    } else if (code === 5) {
        console.log('a ' + color + condition + vehicle[4]);
    } else {
        console.log('unknown vehicle');
    }
}

vehicleType('green', 5, 1);


/*
"use strict";

function advertisement(vehicleNames) {
  const lastOccurence =
    category.toString().replace(/,([^,]*)$/, " and ") +
    category[category.length - 1];
  const vehiclesString = lastOccurence.replace(/,/g, ", ");
  return (
    "#1 vehicles retailer in the Netherlands. We cover " + vehiclesString + "."
  );
}

let category = ["car", "motorbike", "caravan", "bike"];

category.push("go kart");

const text = advertisement(category);
console.log(text);
*/
