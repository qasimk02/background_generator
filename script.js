var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randbtn = document.querySelector(".rand-btn");
var body = document.getElementById("gradient");
function setGradient(){
	body.style.background = "linear-gradient(to right"+", "+color1.value+", "+color2.value+")";
	randbtn.style.background = "linear-gradient(to right"+", "+color1.value+", "+color2.value+")";
	color1.style.background = color1.value;
	color2.style.background = color2.value;
	css.textContent = body.style.background+";";
}
setGradient();
function setRandGradient(){
	getRandColor();
	setGradient();
}
// color1.addEventListener("input",setGradient);
// color2.addEventListener("input",setGradient);
// randbtn.addEventListener("click",setRandGradient);
// Random color generator
function randColor(){
      var makeColorCode = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
      var code = '#';
      for (var count = 0; count < 6; count++) {
         code =code+ makeColorCode[Math.floor(Math.random() * 16)];
      }
      return code;
}
function getRandColor(){
	color1.value = randColor();
	color2.value = randColor();
}