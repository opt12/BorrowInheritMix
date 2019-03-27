var protoDog = {
    name: 'Bello', //default value
    bark: function () {
        console.log(`${this.name} says: Wuff-Wuff`);
    },
}

var defaultDog = Object.create(protoDog);
defaultDog.bark(); //Bello says: Wuff-Wuff
var lumpi = Object.create(protoDog);
lumpi.name = 'Lumpi'; //override the prototype 'name'  property with an own 'name' property
lumpi.bark(); //Lumpi says: Wuff-Wuff

//altering the prototype in the old style and without performance optimizations
var fifi = {
    name: 'Fifi',
}
Object.setPrototypeOf(fifi, protoDog);
fifi.bark(); //Fifi says: Wuff-Wuff