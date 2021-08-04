window.onscroll = function() {scrollFunc(); mediaFunc(x)};


var header = document.getElementById('header');
var sticky = header.offsetTop;
var landingheight = document.querySelector('#landing').offsetHeight;
var inlineColor = document.querySelector('#inlineColor');
var inlineColor1 = document.querySelector('#inlineColor1');
var x = window.matchMedia("(max-width: 480px)");

function scrollFunc() {
  if (window.pageYOffset >= sticky) {
  header.classList.add("sticky");
}
  else {
    header.classList.remove("sticky");
  }
  
  if (window.pageYOffset >= landingheight-116) {
  header.classList.add("stickyBg");
  inlineColor.classList.add("inlineColorSticky");
  inlineColor1.classList.add("inlineColorSticky");
}
  else {
    header.classList.remove("stickyBg");
    inlineColor.classList.remove("inlineColorSticky");
    inlineColor1.classList.remove("inlineColorSticky");
  }

}
function mediaFunc(x) {
  if (x.matches) {
  if (window.pageYOffset >= sticky) {
  header.classList.add("sticky");
  }
  else {
    header.classList.remove("sticky");
  }
  
  if (window.pageYOffset >= landingheight-75) {
  header.classList.add("stickyBg");
  inlineColor.classList.add("inlineColorSticky");
  inlineColor1.classList.add("inlineColorSticky");
  }
  else {
    header.classList.remove("stickyBg");
    inlineColor.classList.remove("inlineColorSticky");
    inlineColor1.classList.remove("inlineColorSticky");
  }
}
else {
  return 0;
}
}

const numb = document.querySelector(".number");
let counter = 0;
setInterval(() => {
  if(counter == 90 ){
    clearInterval();
  }else{
    counter+=1;
    numb.textContent = counter + "%";
  }
}, 33);

const numb1 = document.querySelector(".number1");
let counter1 = 0;
setInterval(() => {
  if(counter1 == 80 ){
    clearInterval();
  }else{
    counter1+=1;
    numb1.textContent = counter1 + "%";
  }
}, 36);

const numb2 = document.querySelector(".number2");
let counter2 = 0;
setInterval(() => {
  if(counter2 == 50 ){
    clearInterval();
  }else{
    counter2+=1;
    numb2.textContent = counter2 + "%";
  }
}, 36);

const numb3 = document.querySelector(".number3");
let counter3 = 0;
setInterval(() => {
  if(counter3 == 60 ){
    clearInterval();
  }else{
    counter3+=1;
    numb3.textContent = counter3 + "%";
  }
}, 48);
const numb5 = document.querySelector(".number5");
let counter5 = 0;
setInterval(() => {
  if(counter5 == 50 ){
    clearInterval();
  }else{
    counter5+=1;
    numb5.textContent = counter5 + "%";
  }
}, 36);
const numb6 = document.querySelector(".number6");
let counter6 = 0;
setInterval(() => {
  if(counter6 == 50 ){
    clearInterval();
  }else{
    counter6+=1;
    numb6.textContent = counter6 + "%";
  }
}, 36);

const scriptURL = 'https://script.google.com/macros/s/AKfycbxOm8Jz4stLW5y4dYaQ_L_0LfY2zbNBYEAZktsaKX04auiXS3pgo3aBhOrZzZmpemQ/exec'
const form = document.forms['ResponseForm']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thanks for Contacting me..! I Will Contact You Soon..."))
  .catch(error => console.error('Error!', error.message))
})
