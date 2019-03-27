var Counter = function (name) {
    this.name = name;
}

Counter.prototype = {
    counter: 0,
    counterObj: {
        value: 0,
    },
    inc: function () {
        this.counter++;
        this.counterObj.value++;
    },
    getCount: function () {
        console.log(`${this.name}.counter = ${this.counter};\t${this.name}.counterObj.value = ${this.counterObj.value};`);
    }
}

var one = new Counter('one');
console.log(`one.counter? ${one.hasOwnProperty('counter')}`); //one.counter? false
var two = new Counter('two');

one.inc();
console.log(`one.counter? ${one.hasOwnProperty('counter')}`); //one.counter? true
one.inc();
one.inc();
two.getCount(); //two.counter = 0;	two.counterObj.value = 3;
two.inc();
one.getCount(); //one.counter = 3;	one.counterObj.value = 4;
two.getCount(); //two.counter = 1;	two.counterObj.value = 4;