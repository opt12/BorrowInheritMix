function speak() {
    var greeting = "Hello, I'm " + this.name;
    console.log(greeting);
}

var me = {
    name: "Felix"
};
var you = {
    name: "Listener"
};

//explizites ad-hoc-Binding
speak.call(me); // Hello, I'm Felix
speak.call(you); // Hello, I'm Listener

//permanentes Binding zur spaeteren Verwendung
var meSpeak = speak.bind(me);
var youSpeak = speak.bind(you);

meSpeak(); // Hello, I'm Felix
youSpeak(); // Hello, I'm Listener
