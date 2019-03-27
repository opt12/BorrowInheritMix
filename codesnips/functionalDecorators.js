@asCircle(5)
@asButton((function () { console.log(`${this.label} pressed`) }).bind(roundButton))
const roundButton = {
    label: "Button1",
};