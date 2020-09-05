
var panelContainer = document.getElementById("panelContainer");
var panel1 = document.getElementById("panel1");
var carousal = document.getElementById("carousal");
var navi = document.getElementById("navi");


function resetPanels(panels) {
	panels.forEach(function(panel) {
		panel.style.zIndex = 0;
  	panel.style.left = '-100%';
  });
}

function expandPanelLeft(panel) {
	panel.style.zIndex = 1;
	panel.style.left = 0;
}

function expandPanelRight(panel) {
	panel.style.zIndex = 1;
	panel.style.left = 0;
}

document.getElementById("expand1").addEventListener("click", function() {
	expandPanelLeft(panel1);
});

document.getElementById("expand2").addEventListener("click", function() {
	expandPanelRight(carousal);
  expandPanelRight(navi);
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
