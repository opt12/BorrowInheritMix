const pipe = (...fns) => (x => fns.reduce((y, f) => f(y), x));

const add1 = n => n+1;
const double = n => n*2;
const add1AndDouble = pipe(add1, double)

console.log(add1AndDouble(20)); //42