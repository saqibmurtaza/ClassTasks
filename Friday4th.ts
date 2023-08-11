import { Console } from "console";
// LEVEL 1:
// Q:1
let arr = ['Mango', 'Apple', 'Orange'];
console.log(arr);

//Level 1:\n Q:2
arr.push('Pineapple', 'Banana');
console.log (`Q2 Result :`);

//Level 1:\n Q:3 used {POP}
console.log(arr);
console.log (`Q3 Result :`);
console.log(arr);

//Level 1:\n Q:4 {Sort}
console.log (`Q4 Result :`);
arr.sort();
console.log(arr);

//Level 1:\n Q:5 {loop}
console.log (`Q5 Result :`);
for(let item of arr){
    console.log(item);
}
// LEVEL 2
//Q:1 (a){indexof(Orange)}
console.log(`\n`);
console.log (`*****LEVEL 2*****\n`);
console.log(arr);
console.log(`\n`);
console.log(`Level 2 \n Q:1 (a) {indexof(Orange)} : ${arr.indexOf('Orange')}\n`);

//Q:1 (b) {lastindexof(Apple)}
console.log(`Level 2 \n Q:1 (b) {last index of(Apple)} Result : ${arr.lastIndexOf('Apple')}\n`);

//Q:1 (c) Make a slice
console.log(`Level 2 \n Q:1 (c) {SLICE : ${arr.slice(1)})}`);
console.log(arr);
console.log(`\n`);

// Q:2 Function
let myArray = [1,2,3,4,5,6,7,8,9];
function reverse (arr:number[]){
    let reverseInOrder = arr.reverse();
    console.log(reverseInOrder)
}
reverse(myArray);

// Q : 3 largest & smallest number in array

let largest = myArray[0];
let smallest = myArray[0]
for (let i = 1; i < myArray.length; i++) {
    if (myArray[i] > largest) {
      largest = myArray[i];
    } else if (myArray[i] < smallest) {
      smallest = myArray[i];
    }
  }
  console.log(largest);
  console.log(smallest);

