

function foo(x,y,c,){
    console.log("foo was called");
    console.log(arguments);
    console.log(arguments.length);
    console.log(arguments[0],arguments[1]);
}
foo('mon','tue','wed ', 'thus')