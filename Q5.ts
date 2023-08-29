// Given an array of temperatures in Celsius [0, 10, 20, 30, 40], use the map method to create a new array where each temperature is converted to Fahrenheit using the formula (Celsius * 9/5) + 32.

var tempInC:number[] = [0, 10, 20, 30, 40];
var tempInF = tempInC.map((i)=>{
    return ((i * 9/5) + 32);
})

console.log(tempInF);
