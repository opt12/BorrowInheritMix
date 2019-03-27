var Dog = function (dogName) {
    this.name = dogName;
    this.bark = function () {
        console.log(`${this.name} says: Wuff-Wuff`);
    }
}

var bello = new Dog('Bello');
