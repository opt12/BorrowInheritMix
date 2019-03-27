function extend(parent, child) {
    var i;
    child = child || {};
    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            child[i] = parent[i];
        }
    }
    return child;
}

var dad = {
    name: 'Adam',
    counts: [1, 2, 3],
    reads: { paper: true }
};
var kid = extend(dad);
kid.name = 'Phil';
kid.counts.push(4);
console.log(dad.name); //Adam
console.log(kid.name); //Phil
console.log(dad.counts); // [1, 2, 3, 4]
console.log(dad.reads === kid.reads); // true