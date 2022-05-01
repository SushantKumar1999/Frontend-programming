var global_x=1; //global variable
console.log("outside functions of global_x =", global_x);

function foo() {
    var local_foo_x=2;
    console.log("indide fuction local_foo_x=" ,global_x);
    
    console.log("indide fuction global_x=" ,local_foo_x);
}

foo();

console.log("indide fuction global_x=" ,local_foo_x);