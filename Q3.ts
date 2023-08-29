// Given an array of strings ["apple", "banana", "cherry", "date", "grape"], use the filter method to create a new array containing only the fruits with more than 5 characters.

var fruits:string[] = ["apple", "banana", "cherry", "date", "grape"];
var newFruits = fruits.filter((i)=>{
    if(i.length>5){
        return i;
    }
}
)
console.log(newFruits);
