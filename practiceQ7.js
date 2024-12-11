/*create a function using the "function" keyword that takes a string as an arguement & return the number of vowels in the string. */

function func(str){
  let count = 0;
  for(let char of str){
    if (char === "a" || char === "e" || char === "i" ||char === "o" || char ==="u"){
       count ++;
    }
  }

  console.log(count);
}
