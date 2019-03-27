function Foo(name) {
    this.name = name;
}

Foo.prototype.identify = function () {
    return {name: this.name};
};

function Bar(name, label) {
    Foo.call(this, name);   //call the Foo-function with explicit this-binding
    this.label = label;
}
// here, we make a new `Bar.prototype` linked to `Foo.prototype`
Bar.prototype =  Object.create(Foo.prototype);

Bar.prototype.identify = function () {
    return { ...this.__proto__.__proto__.identify.call(this),   //"super-call"
            label: this.label
    };
};

var a1 = new Foo("a1");
var a2 = new Foo("a2");
var b1 = new Bar("b1", "obj b1");
var b2 = new Bar("b2", "obj b2");

console.log(a1.identify()); // { name: 'a1' }
console.log(b1.identify()); // { name: 'b1', label: 'obj b1' }