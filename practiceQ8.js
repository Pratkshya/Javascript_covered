//for a given array of numbers, print the square of each value using the forEach loop.

let arr = [1,2,3,4,5,6,7];

// arr.forEach(function squareNum(){
//   for (let i = 0; i < arr.length; i++){
//     let sqNumber = arr[i] * arr[i];
//     console.log(sqNumber);
//   }
   
// })
arr.forEach((num) => {
  console.log(num * num);
});
