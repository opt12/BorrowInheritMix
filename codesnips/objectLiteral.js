var empty = {}
console.log(empty); //{}
console.log(Object.getPrototypeOf(empty) === Object.prototype); //true

var foo = {
    p1: "Property 1",
    p2: empty,
    answer: 42,
    f1: function f1(param1, param2) {
        console.log(`${param1}, ${param2}!`);
    },
    f2: function f2() {
        console.log(`The answer is: ${this.answer}; What was the question?`)
    }
}

console.log(foo.p1); //Property 1
console.log(foo.p2); //{}
foo.f1("Hello", "world"); //Hello, world!
foo.f2(); //The answer is: 42; What was the question?
console.log(Object.getPrototypeOf(foo) === Object.prototype); //true
