//function declaration syntax

function sum(x,y){
    var result=x+y;
    return result;
}

sum(12,67);

//or
function sum(x,y){
    var result=x+y;
    return result;
}

var result=sum(12,67);
console.log("result is ", result);

//function expression syntax(more like variable declaration and assignment)

var sum2 = function(x,y){
    var result=x+y;
    return result;
}
console.log(sum2(23,5));