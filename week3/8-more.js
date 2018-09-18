'use strict';

function advertisement(vehicleNames) {
  let adText = "#1 vehicles retailer in the Netherlands. We cover: ";
  const lastVehicle = "and " + vehicleNames[vehicleNames.length - 1] + "s.";

  for (let i = 0; i < vehicleNames.length - 1; i++) {
    adText += vehicleNames[i] + "s, "; 
  }
  return adText + lastVehicle;
}

let category = ["car", "motorbike", "caravan", "bike"];

const text = advertisement(category);
console.log(text);


//Another way of solving the problem----

/*'use strict';

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

const text = advertisement(category);
console.log(text);
*/
