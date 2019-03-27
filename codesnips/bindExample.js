var one = {
    name: "object",
    say: function (greet) {
        console.log(`${greet}, ${this.name}`);
    }
};

var two = {
    name: "another object"
    };
    
// test
one.say('hi'); // "hi, object"

// assigning to a variable
// `this` will point to the global object
var say = one.say;
say('hoho'); // "hoho, undefined"   //no name-property on global object
say.call(two, 'hoho'); // "hoho, another object"

//fix explicit binding to two-Object
var twosay1 = one.say.bind(two);
twosay1('yo'); // yo, another object

//fix explicit and parameter assignment
var twosay2 = one.say.bind(two, 'Cheers');
twosay2(); // Cheers, another object
