//keep track of active slides
//show only one slide at a time
//highlights thumnail
//updates caption


// Once again, I heavily relied on studying the example on W3 schools as a reference for my project
//set slideshow to show the first image once the page loads//
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("JaySlidesImages");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");

  //logic
  //if you go past last slide...go back to slide 1
  //if you go before slide one..go to last slide
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  //hides all slides first down here
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  //highlights active thumnail image
  dots[slideIndex-1].className += " active";
  //sets the caption text
  captionText.innerHTML = dots[slideIndex-1].alt;
}