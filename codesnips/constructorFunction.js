var Dog = function (dogName) {
    this.name = dogName;
    this.bark = function () {
        console.log(`${this.name} says: Wuff-Wuff`);
    }
}

var bello = new Dog('Bello');
bello.bark(); //Bello says: Wuff-Wuff
var lumpi = Dog('Lumpi'); //called without new and hence pollutes the global namespace
bark(); //Lumpi says: Wuff-Wuff
lumpi.bark(); //Cannot read property 'bark' of undefined