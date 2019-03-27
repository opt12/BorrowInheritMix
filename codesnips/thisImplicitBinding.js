var me = {
    speak: function speak() {
        var greeting = "Hello, I'm " + this.name;
        console.log(greeting);
    },
    name: "Felix",
};

//implicit binding
me.speak(); //Hello, I'm Felix

//default binding
global.name = "Wer?"; //property on global object
var whoSpeak = me.speak;    //binding to me gets lost here for variable whoSpeak
whoSpeak();
//Hello, I'm Wer? //in non-strict mode
//TypeError: this is undefined //in strict-mode
