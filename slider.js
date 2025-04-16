let currentIndex = {
  slider1: 0,
  slider2: 0,
};

function showSlide(sliderId, index) {
  const slider = document.getElementById(sliderId);
  const slides = slider.querySelector(".slides");
  const totalSlides = slides.children.length;

  if (index >= totalSlides) {
    currentIndex[sliderId] = 0;
  } else if (index < 0) {
    currentIndex[sliderId] = totalSlides - 1;
  } else {
    currentIndex[sliderId] = index;
  }

  const offset = -currentIndex[sliderId] * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide(sliderId) {
  showSlide(sliderId, currentIndex[sliderId] + 1);
}

function prevSlide(sliderId) {
  showSlide(sliderId, currentIndex[sliderId] - 1);
}

// Initialize sliders
showSlide("slider1", 0);
showSlide("slider2", 0);
showSlide("slider3", 0);
showSlide("slider4", 0);
showSlide("slider5", 0);
