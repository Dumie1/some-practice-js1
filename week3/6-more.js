'use strict';

function vehicleType(color, code, age) {
    const state = age <= 1 ? " new" : " used";
    if (code === 1) {
        return "a " + color + state + " car";
    } else if (code === 2) {
        return "a " + color + state + " motorbike";
    } else {
        return "unknown vehicle";
    }
}

console.log(vehicleType("blue", 1, 1));

// vehicleType('red', 1, 1); // => 'a red new car'
// vehicleType('blue', 1, 5); // => 'a blue used car'
// vehicleType('green', 2, 1); // => 'a green new motorbike'
// vehicleType('yellow', 2, 10); // => 'a yellow used motorbike'
// vehicleType('magenta', 5, 1); // => 'unknown vehicle'
