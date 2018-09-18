"use strict";

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
const maurosFavoriteAnimal = "turtle";
favoriteAnimals.push(maurosFavoriteAnimal);
console.log(favoriteAnimals);

const jimsFavoriteAnimal = "meerkat";
favoriteAnimals.splice(1, 0, jimsFavoriteAnimal); 
console.log(
    "I think the new value of favoriteAnimals is: blowfish, meerkat, capricorn, giraffe, turtle."
);
console.log(favoriteAnimals);

console.log("The array has a length of: " + favoriteAnimals.length);

favoriteAnimals.splice(3, 1); // no giraffe
console.log(favoriteAnimals);

const indexOfMeerkat = favoriteAnimals.indexOf("meerkat");
favoriteAnimals.splice(indexOfMeerkat, 1);
console.log(favoriteAnimals);
console.log("The item you are looking for is at index: " + indexOfMeerkat);


/* &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
* Array methods
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array


* References - Using splice() 
* https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/splice 
* https://www.lynda.com/JavaScript-tutorials/Properties-methods-arrays/574716/612037-4.html?autoplay=true
* w3schools https://www.w3schools.com/js/js_array_methods.asp
* youtube https://www.youtube.com/watch?v=H4Sf4suR3C4
* http://www.hostingadvice.com/how-to/javascript-remove-element-array/
*/
