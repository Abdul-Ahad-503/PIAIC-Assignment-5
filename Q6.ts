// Given an array of numbers [3, 6, 9, 12, 15, 18], use the map and filter methods together to create a new array containing the doubled values of odd numbers.

var numbers:number[] = [3, 6, 9, 12, 15, 18];

var dblOfOdd = numbers.filter((i) => i%2!= 0).map((j)=>j*2);

console.log(dblOfOdd);
