var obj1 = {
    a: "function",
    callback: function () {
        console.log("this.a = ", this.a);
    },
    foo: function foo() {
        setTimeout(this.callback, 1000) //link to execution context gets lost
    }
}
obj1.foo(); //this.a =  undefined

var obj2 = {
    a: "bind",
    callback: function () {
        console.log("this.a = ", this.a);
    },
    foo: function foo() {
        setTimeout(this.callback.bind(this), 1000) //explicit binding of this
    }
}
obj2.foo(); //this.a =  bind

var obj3 = {
    a: "arrow",
    foo: function foo() {
        setTimeout(() => {
            console.log("this.a = ", this.a); //lexical binding of this
        }, 1000)
    }
}
obj3.foo(); //this.a =  arrow
