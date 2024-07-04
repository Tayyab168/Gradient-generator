
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let nextbtn = document.getElementById("nextbtn");
let gradient = document.getElementById("gradient");
let previous_col = document.getElementById("previous");
let count = 0;

btn1.style.borderRadius = "35px";
btn1.style.border = "none";
btn1.style.fontSize = "1.2rem";

nextbtn.style.textAlign = "center";
nextbtn.style.fontSize = "20px";
nextbtn.style.padding = "5px";
nextbtn.style.borderRadius = "5px";
nextbtn.style.border = "none";

btn2.style.fontSize = "1.2rem";
btn2.style.border = "none";
btn2.style.borderRadius = "35px";
btn3.style.borderRadius = "35px";
btn3.style.border = "none";
btn3.style.fontSize = "1.2rem";

previous_col.style.textAlign = "center";
previous_col.style.fontSize = "20px";
previous_col.style.padding = "5px";
previous_col.style.borderRadius = "5px";
previous_col.style.border = "none";

let clr1 = "";
let clr2 = "";
let clr3 = "";
let newClr = [];
let randomNomber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

function randomcolor() {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    color = color + randomNomber[index];
  }
  return color;
}

function leftside() {
  clr1 = randomcolor();
  btn1.innerHTML = clr1;
  btn1.style.backgroundColor = clr1;

  let gradientStyle = `linear-gradient(to right ,${clr1},${clr2},${clr3})`;
  gradient.innerHTML = gradientStyle;
  document.getElementById("body").style.backgroundImage = gradientStyle;
  newClr[count] = [clr1, clr2, clr3];
  count++;
}

function rightside() {
  clr2 = randomcolor();
  btn2.innerHTML = clr2;
  btn2.style.backgroundColor = clr2;

  let gradientStyle = `linear-gradient(to right ,${clr1},${clr2},${clr3})`;
  gradient.innerHTML = gradientStyle;
  document.getElementById("body").style.backgroundImage = gradientStyle;
  newClr[count] = [clr1, clr2, clr3];
  count++;
}

function thirdside() {
  clr3 = randomcolor();
  btn3.innerHTML = clr3;
  btn3.style.backgroundColor = clr3;

  let gradientStyle = `linear-gradient(to right ,${clr1},${clr2},${clr3})`;
  gradient.innerHTML = gradientStyle;
  document.getElementById("body").style.backgroundImage = gradientStyle;
  newClr[count] = [clr1, clr2, clr3];
  count++;
}

function showPrevious() {
  if (count >= -1) {
    count--;
    let previousColors = newClr[count];
    btn1.innerHTML = previousColors[0];
    btn2.innerHTML = previousColors[1];
    btn3.innerHTML = previousColors[2];
    btn1.style.backgroundColor = previousColors[0];
    btn2.style.backgroundColor = previousColors[1];
    btn3.style.backgroundColor = previousColors[2];

    let gradientStyle;
    if (previousColors.length == 2) {
      gradientStyle = `linear-gradient(to right ,${previousColors[0]},${previousColors[1]})`;
    } else if (previousColors.length == 3) {
      gradientStyle = `linear-gradient(to right ,${previousColors[0]},${previousColors[1]},${previousColors[2]})`;
    }
    gradient.innerHTML = gradientStyle;
    document.getElementById("body").style.backgroundImage = gradientStyle;
  }
}

function showNext() {
  if (count < newClr.length) {
    let nextColors = newClr[count];
    btn1.innerHTML = nextColors[0];
    btn2.innerHTML = nextColors[1];
    btn3.innerHTML = nextColors[2];
    btn1.style.backgroundColor = nextColors[0];
    btn2.style.backgroundColor = nextColors[1];
    btn3.style.backgroundColor = nextColors[2];

    let gradientStyle;
    if (nextColors.length === 2) {
      gradientStyle = `linear-gradient(to right ,${nextColors[0]},${nextColors[1]})`;
    } else if (nextColors.length === 3) {
      gradientStyle = `linear-gradient(to right ,${nextColors[0]},${nextColors[1]},${nextColors[2]})`;
    }
    gradient.innerHTML = gradientStyle;
    document.getElementById("body").style.backgroundImage = gradientStyle;

    count++;
  }
}

btn2.addEventListener("click", rightside);
btn1.addEventListener("click", leftside);
btn3.addEventListener("click", thirdside);
previous_col.addEventListener("click", showPrevious);
nextbtn.addEventListener("click", showNext);
