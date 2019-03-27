var dogFactory = function(dogName) {
  return {
    name: dogName,
    bark() {
      console.log(`${this.name} says: Wuff-Wuff`);
    }
  };
};

var bello = dogFactory("Bello");
bello.bark(); //Bello says: Wuff-Wuff

var lumpi = dogFactory("Lumpi");
lumpi.bark(); //Lumpi says: Wuff-Wuff
bark(); //ReferenceError: bark is not defined; Program Abortion;