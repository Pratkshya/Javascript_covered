//Guess the number
//Practice question 2

let numToGuess = 27;

let userGuess = prompt("Guess any number:");

while(userGuess != numToGuess){
  userGuess = prompt("You entered wrong number. Try again!");
}
console.log("You guessed it right! The game number was = ", numToGuess);
