let boxes = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".restart");
let newGamebtn = document.querySelector("#newGame");
let winnerContainer = document.querySelector(".winnerMsg");
let msg = document.querySelector("#msg")

let turnX = true;
const winPattern = [
          [0,1,2],
          [0,3,6],
          [0,4,8],
          [1,4,7],
          [2,5,8],
          [2,4,6],
          [3,4,5],
          [6,7,8],
];

const restartGame = () => {
  turnX = true;
  enableBtns();
  winnerContainer.classList.add("hide");
  
}
boxes.forEach((btn) => {
  btn.addEventListener("click", () => {
      console.log("box was clicked");
      if (turnX){
        btn.innerText = "X";
        turnX = false;
      }
      else{
        btn.innerText = "O";
        turnX = true;
      } 
      btn.disabled = true;  
      checkWinner();
  });
});

const enableBtns = () => {
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
};

const disableBtns = () => {
  for(let box of boxes){
    box.disabled = true;
  }
}

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  winnerContainer.classList.remove("hide");
  disableBtns();
}

const checkWinner = () => {
  for (let pattern of winPattern){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("Winner",pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};

newGamebtn.addEventListener("click", restartGame);
resetBtn.addEventListener("click", restartGame);



