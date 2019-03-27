var obj = {
    a: "arrow",
    foo: function foo() {
        setTimeout(() => {
            console.log("this.a = ", this.a); //lexical binding of this
        }, 1000)
    }
}
obj.foo(); //this.a = arrow