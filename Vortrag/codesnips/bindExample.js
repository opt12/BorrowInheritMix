var one = {
    name: "object",
    say: function (greet) {
        console.log(`${greet}, ${this.name}`);
    }
};

var two = {
    name: "another object"
};

//fix explicit binding to two-Object
var twosay1 = one.say.bind(two);
twosay1('yo'); // yo, another object

//fix explicit and parameter assignment (curry)
var twosay2 = one.say.bind(two, 'Cheers');
twosay2(); // Cheers, another object
