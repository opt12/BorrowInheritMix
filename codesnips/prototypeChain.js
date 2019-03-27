let father = {
    first: "Darth",
    last: "Skywalker",
    
    sayName: function () {
        console.log(`My name is ${this.first} ${this.last}.`);
    }
}

let son = {};   //empty object with Prototype set to Object
Object.setPrototypeOf(son, father); //performance penalty!!! Better: let son = Object.create(father)
console.log(`son has own keys: [${Object.keys(son)}]`);   //son has own keys: []

son.first = "Luke"; //becomes an own property of son and will shadow father's prop of the same name
son.side = "light side"; //becomes an own property of son

son.sayName();      //My name is Luke Skywalker.
father.sayName();   //My name is Darth Skywalker.

father.last = "Vader"
father.side = "dark side"; //this becomes an own property of father


son.sayName();      //My name is Luke Vader.    //Oops, the last name changed on his Prototype Object
console.log(son.side);  //light side

father.sayName();   //My name is Darth Vader.
console.log(father.side);   //dark side

console.log(`Object.keys(son): [${Object.keys(son)}]`);   //Object.keys(son): [first,side]
console.log(`Object.keys(father): [${Object.keys(father)}]`); //Object.keys(father): [first,last,sayName,side]
