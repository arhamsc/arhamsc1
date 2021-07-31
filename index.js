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
