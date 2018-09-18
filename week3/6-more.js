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
