const asCircle = function (radius) {
    //...
    this.grow = function () {/*...*/};
    return this;
};

const asButton = function (action) {
    //...
    this.fire = function () {/*...*/};
    return this;
};

const roundButton = {
    label: "Button1",
}

asCircle.call(roundButton, 5)
asButton.call(roundButton, 
    (function () { /*do something*/}))

roundButton.fire(); //Button1 pressed
roundButton.grow();