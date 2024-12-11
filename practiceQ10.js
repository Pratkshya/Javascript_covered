/* Take a number n as input from user. Create an array of numbers from 1 to n.
  Use the reduce method to calculate sum of all numbers in the array.
  Use the reduce method to calculate product of all numbers in the array.*/

let userInput = prompt("Enter any number of your choice: ");

let arr = [];

for(let i = 1; i <= userInput; i++){
  arr[i - 1] = i; 
  //console.log(i);
}

console.log(arr);

let sumArr = arr.reduce((pre, curr) => {
  return pre + curr;
})

console.log(sumArr);


let productArr = arr.reduce((pre, curr) => {
  return pre * curr;
})

console.log(productArr);