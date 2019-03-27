const asCircle = function (radius) {
    let _radius = radius;
    this.area = function () {
        return Math.PI * _radius * _radius;
    };
    this.grow = function () {
        _radius++;
    };
    this.shrink = function () {
        _radius--;
    };
    return this;
};

const asButton = function (action) {
    let _action = action;
    this.hover = function (bool) {
        bool ? mylib.appendClass('hover') : mylib.removeClass('hover');
    };
    this.press = function (bool) {
        bool ? mylib.appendClass('pressed') : mylib.removeClass('pressed');
    };
    this.fire = function () {
        return _action();
    };
    this.setAction = function (action) {
        _action = action;
        return this;
    }
    return this;
};

const roundButton = {
    label: "Button1",
}

asCircle.call(roundButton, 5)
asButton.call(roundButton, (function () { console.log(`${this.label} pressed`) }).bind(roundButton))

console.log(roundButton.area());    //78.53981633974483
roundButton.fire(); //Button1 pressed
roundButton.grow();
console.log(roundButton.area()); //113.09733552923255
console.log(roundButton._radius); //undefined
