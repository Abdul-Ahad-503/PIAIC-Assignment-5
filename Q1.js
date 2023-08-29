"use strict";
// Write a program that uses filter to remove all negative numbers from an array of numbers
var numArray = [1, 2, 3, 4, -1, -4, -7, 23, -65, -2, 3, -3, 2, 8];
var postiveNumber = numArray.filter((i) => i > 0);
console.log(postiveNumber);
