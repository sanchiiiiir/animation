// // // // let sanchir = {
// // // //     height: 187,
// // // //     mass: 70,
// // // //     hair: "black",
// // // //     gender: "male",
// // // // };
// // // // let zolboo = {
// // // //     height: 185,
// // // //     mass: 80,
// // // //     hair: "black",
// // // //     gender: "female",
// // // // };
// // // // sanchir.height = 198;
// // // // zolboo.height = 150;
// // // // console.log(sanchir.height);
// // // // console.log(zolboo.height);
// // // // console.log(sanchir.gender);
// // // // console.log(zolboo.gender);
// // // class Boys{
// // //     constructor(name, age, grade, gender){
// // //         this.name = name;
// // //         this.age = age;
// // //         this.grade = grade;
// // //         this.gender = gender;
// // //     }
// // //     play() {
// // //         console.log(this.name);
// // //         console.log(this.age);
// // //         console.log(this.grade);
// // //         console.log(this.gender);
// // //     }
// // // }

// // // let sanchir = new Boys("sanchir", 16, 100, "male");
// // // let zolboo  = new Boys("zolboo", 18, 50,"female" );

// // // sanchir.play();
// // // zolboo.play();
// // class Anime{
// //     constructor(name, creator, published){
// //         this.name = name;
// //         this.creator = creator;
// //         this.published = published;
// //     }
// //     displayAnime() {
// //         console.log(this.name, this.creator, this.published);
// //     }
// // }

// // let naruto = new Anime("naruto", "sanchir", 1960,);
// // let onePiece = new Anime("onePiece", "zolboo", 1950);

// // naruto.displayAnime();
// // onePiece.displayAnime();
// class Animal {
//     constructor (hedenHultei, suunTejeelten) {
//     this.hedenHultei = hedenHultei
//     this.suunTejeelten = suunTejeelten
//     }
//     print () {
//         console.log(
//         'hedenHultei:', this.hedenHultei,
//         'suunTejeelten:',this.suunTejeelten
//         );
//     }
// }
// let kangaroo = new Animal (4, true);
// kangaroo.print();
// class Birds extends Animal {
//     constructor (hedenHultei, suunTejeelten, ner, mahaarHoolloh) {
//         super (hedenHultei, suunTejeelten);
//         this.ner = ner;
//         this.mahaarHoolloh = mahaarHoolloh;
//     }
//     printBirds () {
//         console.log(
//             'ner:',this.ner,
//             'mahaarHoolloh:',this.mahaarHoolloh
//             );
//     }
// }
// let boljmor = new Birds (2, true, 'boljmor', false);
// let burged = new Birds (2, true, 'burged', true);
// console.log(burged);

//6. Get all the values of users object
// const users = {
//   Alex: {
//     email: "alex@alex.com",
//     skills: ["HTML", "CSS", "JavaScript"],
//     age: 20,
//     isLoggedIn: false,
//     points: 30,
//   },
//   Asab: {
//     email: "asab@asab.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "Redux",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 25,
//     isLoggedIn: false,
//     points: 50,
//   },
//   Brook: {
//     email: "daniel@daniel.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//     age: 30,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Daniel: {
//     email: "daniel@alex.com",
//     skills: ["HTML", "CSS", "JavaScript", "Python"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   John: {
//     email: "john@john.com",
//     skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//     age: 20,
//     isLoggedIn: true,
//     points: 50,
//   },
//   Thomas: {
//     email: "thomas@thomas.com",
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
//   Paul: {
//     email: "paul@paul.com",
//     skills: [
//       "HTML",
//       "CSS",
//       "JavaScript",
//       "MongoDB",
//       "Express",
//       "React",
//       "Node",
//     ],
//     age: 20,
//     isLoggedIn: false,
//     points: 40,
//   },
// };
//1. Find the person who has many skills in the users object.
// let usersArr = Object.keys(users);
// let max = 0;
// let maxName = '';

// for (let i = 0; i < usersArr.length; i++) {
//     if (users[usersArr[i]].skills.length > max) {
//         max = users[usersArr[i]].skills.length;
//         maxName = usersArr[i]
//     }
// }

// console.log(maxName, max);

//2.Count logged in users,count users having greater than equal to 50 points from the following object.
//  let usersArr = Object.keys(users);
//  let max = 0;

//  for (let i = 0; i < usersArr.length; i++) {
//      if (users[usersArr[i]].points >= 50) {
//          max++;
//      }
//  }
//  console.log(max);

//3. Find people who are MERN stack developer from the users object
// let usersArr = Object.keys(users);

// for (let i = 0; i < usersArr.length; i++) {

//     let a = users[usersArr[i]].skills.filter((a) => a === "MongoDB");
//     let k = users[usersArr[i]].skills.filter((a) => a === "Node");
//     let b = users[usersArr[i]].skills.filter((a) => a === "React");
//     let c = users[usersArr[i]].skills.filter((a) => a === "Express");

//     if (a.length, b.length, c.length, k.length > 0) {
//         console.log(usersArr[i]);
//     }

// }

//4.Set your name in the users object without modifying the original users object
// let newObject = Object.assign({
//     sanchir: {
//         email: 'sanchirbyambaa1@gmail.com',
//         skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//         age: 16,
//         isLoggedIn: true,
//         points: 100
//     }
// }, users);
// console.log(newObject);

//5. Get all keys or properties of users object
// let usersArr = Object.keys(users);
// console.log(Object.keys(users));
// for (i = 0; i < usersArr.length; i++) {
//     console.log(Object.getOwnPropertyNames(users[usersArr[i]]));
// }

// 6. Get all the values of users object
// let usersArr = Object.keys(users);
// for (i = 0; i < usersArr.length; i++) {
//     console.log(Object.values(users[usersArr[i]]));
// }
// let container = document.createElement("div");
// document.body.style.margin = "0";
// container.style =
//   "height: 100vh; width: 100vw; background-color: blue; display:flex; align-items:center; justify-content:center;";
// document.body.appendChild(container);
// let boxOne = document.createElement("div");
// boxOne.style =
//   "height: 200px; width: 200px; background-color: white; border-radius: 10px";
// container.appendChild(boxOne);
// let boxTwo = document.createElement("div");
// boxTwo.style = "";

// let input = document.createElement("input");
// let btn = document.createElement("button");
// let mainDiv = document.createElement("div");

// mainDiv.appendChild(input);
// mainDiv.appendChild(btn);

// boxOne.append(mainDiv);
// input.style =
//   "border-color:dodgerblue; margin-top:12px; width:120px; height:10px; margin-left:5px";

// btn.style =
//   "background:blue; border-color:blue; width:30px; height:15px; margin-left:30px; margin-top:15px;";
// btn.innerText = "Add";
// let container = document.createElement("div");
// document.body.style.margin = "0";
// container.style =
//   "height: 100vh; width: 100vw; background-color: blue; display:flex; align-items:center; justify-content:center;";
// document.body.appendChild(container);
// let boxOne = document.createElement("div");
// boxOne.style =
//   "height: 550px; width: 600px; background-color: white; border-radius: 10px";
// container.appendChild(boxOne);
// let boxTwo = document.createElement("input");
// boxTwo.style =
//   " height: 60px; width: 350px; border-color: blue; border-radius: 10px; ";
// let boxThree = document.createElement("button");
// boxThree.innerText = "Add";
// boxThree.style =
//   "color: white; background-color: blue; height: 60px; width: 100px; border-radius: 10px; cursor: pointer;  ";
// let boxTwoThree = document.createElement("div");
// boxTwoThree.style =
//   "width: 600px; height: 180px; display: flex; align-items: center; justify-content: space-evenly;";
// boxOne.appendChild(boxTwoThree);
// boxTwoThree.appendChild(boxTwo);
// boxTwoThree.appendChild(boxThree);
// let footer = document.createElement("div");
// footer.style =
//   "height: 350px; width: 600px; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 10px ";
// boxOne.appendChild(footer);
// let footerOne = document.createElement("div");
// footerOne.style =
//   "height: 60px; width: 550px; background-color: lightblue; border-radius: 10px; border: 1px solid grey; display: flex; align-items: center; justify-content: space-between; padding: 10px";
// footerOne.innerText = "I will wake up at 8 in the morning";
// footer.appendChild(footerOne);
// let footerOneTrash = document.createElement("button");
// footerOneTrash.style =
//   "color: white; background-color: blue; height: 50px; width: 50px; border-radius: 10px; cursor: pointer;  ";
// footerOne.appendChild(footerOneTrash);
// let footerTwo = document.createElement("div");
// footerTwo.style =
//   "height: 60px; width: 550px; background-color: lightblue; border-radius: 10px; border: 1px solid grey; display: flex; align-items: center; justify-content: space-between; padding: 10px";
// footerTwo.innerText = "I will practice html for 1 hour";
// footer.appendChild(footerTwo);
// let footerTwoTrash = document.createElement("button");
// footerTwoTrash.style =
//   "color: white; background-color: blue; height: 50px; width: 50px; border-radius: 10px; cursor: pointer;  ";
// footerTwo.appendChild(footerTwoTrash);
// let footerThree = document.createElement("div");
// footerThree.style =
//   "height: 60px; width: 550px; background-color: lightblue; border-radius: 10px; border: 1px solid grey; display: flex; align-items: center; justify-content: space-between; padding: 10px";
// footerThree.innerText = "I will give time for 2 hours css";
// footer.appendChild(footerThree);
// let footerThreeTrash = document.createElement("button");
// footerThreeTrash.style =
//   "color: white; background-color: blue; height: 50px; width: 50px; border-radius: 10px; cursor: pointer;   ";
// footerThree.appendChild(footerThreeTrash);
// let footerFour = document.createElement("div");
// footerFour.style =
//   "height: 60px; width: 550px; background-color: lightblue; border-radius: 10px; border: 1px solid grey; display: flex; align-items: center; justify-content: space-between; padding: 10px";
// footerFour.innerText = " Then I will have breakfast";
// footer.appendChild(footerFour);
// let footerFourTrash = document.createElement("button");
// footerFourTrash.style =
//   "color: white; background-color: blue; height: 50px; width: 50px; border-radius: 10px; cursor: pointer;  ";
// footerFour.appendChild(footerFourTrash);
// let myDiv = document.getElementById("myDiv");
// let red = document.getElementById("red");
// let blue = document.getElementById("blue");

// red.onclick = function () {
//   if (myDiv.style.backgroundColor == "red") {
//     myDiv.style.backgroundColor = "red";
//   } else if ((myDiv.style.backgroundColor = "blue")) {
//     myDiv.style.backgroundColor = "red";
//   }
// };
// blue.onclick = function () {
//   if (myDiv.style.backgroundColor == "red") {
//     myDiv.style.backgroundColor = "blue";
//   } else if ((myDiv.style.backgroundColor = "red")) {
//     myDiv.style.backgroundColor = "blue";
//   }
// };
// let box1 = document.getElementById("box1");
// let box2 = document.getElementById("box2");
// let text = document.getElementById("text");

// box1.addEventListener("click", function () {
//   text.innerText = "Ulaan deer darlaa";
// });
// box2.addEventListener("click", function () {
//   text.innerText = "Tsenher deer darlaas";
// });
// let redSide = document.getElementById("divLeft");
// let blueSide = document.getElementById("divRight");
// let redIndex = 6;
// let blueIndex = 6;

// window.addEventListener("keydown", function (event) {
//   if (event.key == "s") {
//     redIndex++;
//     blueIndex--;
//     redSide.style.gridColumn = `span ${redIndex}`;
//   }
// });
const One = new Audio("./images/crash.mp3");
const Two = new Audio("./images/tom-2.mp3");
const Three = new Audio("./images/tom-3.mp3");
const Four = new Audio("./images/tom-4.mp3");
const Five = new Audio("./images/crash.mp3");
const Six = new Audio("./images/kick-bass.mp3");
const Seven = new Audio("./images/snape.mp3");

window.addEventListener("keydown", (event) => {
  if (event.key == "w") {
    console.log(One);
    One.play();
  }
  if (event.key == "a") {
    Two.play();
  }
  if (event.key == "s") {
    Three.play();
  }
  if (event.key == "d") {
    Four.play();
  }
  if (event.key == "j") {
    Five.play();
  }
  if (event.key == "k") {
    Six.play();
  }
  if (event.key == "l") {
    Seven.play();
  }
});
