var dogFactory = function(dogName) {
  return {
    name: dogName,
    bark() {
      console.log(`${this.name} says: Wuff-Wuff`);
    }
  };
};

var bello = dogFactory("Bello");
