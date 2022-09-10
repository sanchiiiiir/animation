let boxOne = document.getElementById("boxOne");
let boxTwo = document.getElementById("boxTwo");
let redSide = 50;
let cyanSide = 50;
window.addEventListener("keydown", (event) => {
  if (event.key == "s") {
    myFunction();
  }
  if (event.key == "m") {
    myFunctionTwo();
  }
});

function myFunction() {
  boxOne.style.width = `${redSide}vw`;
  boxTwo.style.width = `${cyanSide}vw`;
  redSide += 10;
  cyanSide -= 10;
  if (redSide == 120) {
    alert("Red wins");
    location.reload();
  }
}

boxTwo.addEventListener("click", myFunctionTwo);

function myFunctionTwo() {
  boxOne.style.width = `${redSide}vw`;
  boxTwo.style.width = `${cyanSide}vw`;
  redSide -= 10;
  cyanSide += 10;
  if (cyanSide == 120) {
    alert("cyan wins");
    location.reload();
  }
}
