"use strict";

function vehicleType(color, code, age) {
    const vehicle = ['car', 'motorbike', 'caravan', 'bike'];
    const condition = age <= 1 ? ' new ' : ' used ';
    if (code > vehicle.length) {
        return 'unknown vehicle'
    } else {
        return 'a ' + color + condition + vehicle[code - 1];
    }
}
vehicleType('green', 3, 1);
