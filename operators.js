// arithmatic operations 
var x=2, y=6;
console.log(10.5+2);
console.log(x+y);
console.log(x*y);
console.log(x/y);
console.log(x-y);
console.log(x%y);
console.log(y%x);

//realtional operators
var isBefore='hello'<'hi';
console.log(isBefore);

//logical operators
var isRaining=true , goingByWalk=true, goingByCar=false;
var takeUmbrella=isRaining && goingByWalk;
console.log(takeUmbrella);

var takeUmbrella=isRaining && goingByCar;
console.log(takeUmbrella);

var priceOfPhone=42000, bankBalance=60000, amIIntersted=true;
var willBuyPhone= priceOfPhone<bankBalance && amIIntersted;
console.log(willBuyPhone);

//miscellaneous
var name='john' ,message='good morning';
console.log(name+ ' ' + message);