function foo(){     //unbound function
    console.log( this.a );
}

var obj = {
    a:2,
    foo: foo,
}

obj.foo();  //2
var alias = obj.foo;
alias();    //undefined