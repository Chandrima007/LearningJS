var bar = "in global"
// bar = "in global"

function foo(){
    var bar = "inside foo";
    console.log(this.bar);
}

var o2 = {
    bar: "in o2",
    foo: foo
}


foo();
o2.foo();