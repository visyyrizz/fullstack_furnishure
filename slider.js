let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slides img');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
}

function prevSlide() {
  const slides = document.querySelectorAll('.slides img');
  if (slideIndex <= 1) {
    slideIndex = slides.length;
  } else {
    slideIndex--;
  }
  showSlides();
}

function nextSlide() {
  const slides = document.querySelectorAll('.slides img');
  if (slideIndex >= slides.length) {
    slideIndex = 1;
  } else {
    slideIndex++;
  }
  showSlides();
}

// Auto slide change, change 3000 to desired interval in milliseconds (3 seconds here)
setInterval(() => {
  nextSlide();
}, 3000);

showSlides();