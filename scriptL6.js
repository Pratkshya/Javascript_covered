// let btn = document.createElement("button");  //creates the button element
// btn.innerText = "Click Me"; //inserts the text inside the button
// btn.style.color = "black"; //style to button
// btn.style.backgroundColor = "pink"; //style to button

// document.querySelector("body").prepend(btn); //inserts the button inside the body of HTML at the top since prepend is used.

// let para = document.querySelector("p");
// para.classList.add("newClass");

const myBtn = document.querySelector("#btn");
let body = document.querySelector("body")
let currMode = "light";

myBtn.addEventListener("click", () => {
  //console.log("you are trying to change the mode");
  if (currMode === "light"){
    currMode = "dark";
    //body.style.backgroundColor = "black";

    body.classList.add("dark");
    body.classList.remove("light");
  }
  else{
    currMode = "light";
    //body.style.backgroundColor = "white";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
})