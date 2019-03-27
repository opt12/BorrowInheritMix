var protoDog = {
    name: 'Bello', //default value
    bark: function () {
        console.log(`${this.name} says: Wuff-Wuff`);
    },
}

var defaultDog = Object.create(protoDog);
