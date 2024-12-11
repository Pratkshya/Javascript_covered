let marksOfStd = [85, 97,44,37,76,60];

let sum = 0;

// for(i = 0; i < marksOfStd.length; i ++){
//   sum = sum + marksOfStd[i];
// }
 for(let val of marksOfStd){
  sum += val;
 }
console.log(`The total sum of the marks obtianed is: ${sum}`);
let avgMarks = sum / marksOfStd.length

console.log(`The average marks of the student is: ${avgMarks}`);