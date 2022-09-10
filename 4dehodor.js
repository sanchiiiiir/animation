let boxOne = document.getElementById("boxOne");
let boxTwo = document.getElementById("boxTwo");
let text = document.getElementById("text");
let redSide = 50;
let cyanSide = 50;
window.addEventListener("keydown", (event) => {
  if (event.key == "s") {
    myFunction();
  }
  if (event.key == "l") {
    myFunctionTwo();
  }
});

function myFunction() {
  boxOne.style.width = `${redSide}vw`;
  boxTwo.style.width = `${cyanSide}vw`;
  redSide++;
  cyanSide--;
  if (redSide >= 100) {
    text.innerText = "RED WINS";
    text.style.color = "red";
    text.style.fontSize = "100px";
    text.style.backgroundImage =
      "url('https://i.pinimg.com/736x/a4/a4/81/a4a4815ec5a44c194563362e5256b7cf.jpg%27)";
  }
}

boxTwo.addEventListener("click", myFunctionTwo);

function myFunctionTwo() {
  boxOne.style.width = `${redSide}vw`;
  boxTwo.style.width = `${cyanSide}vw`;
  redSide--;
  cyanSide++;

  if (cyanSide >= 100) {
    text.innerText = "CYAN WINS";
    text.style.color = "cyan";
    text.style.fontSize = "100px";
    text.style.backgroundImage =
      "url('https://i.pinimg.com/736x/a4/a4/81/a4a4815ec5a44c194563362e5256b7cf.jpg%27)";
  }
}
