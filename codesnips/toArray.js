var toArray = function () {
    return Array.prototype.slice.call(arguments);
}

console.log(toArray(1, 4, 3, 2)); //[ 1, 4, 3, 2 ]
