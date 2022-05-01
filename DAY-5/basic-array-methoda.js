var days=[
    'monday',
    'tuesday',
    'wednesday',
    'thrusday',
    'friday',
];

days.sort();
days.reverse();

console.log(days);

console.log( days.indexOf('monday'));
console.log( days.indexOf('saturday')); // in this case the item is not there so it return -1

var numbers=[10,20,30,44,23,342,1,232,4,56554,34];
numbers.sort(function(x,y){
     return x-y;
});
console.log(numbers);