let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slides img');
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slideIndex++;
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  
  slides[slideIndex].style.display = 'block';
}

function prevSlide() {
  const slides = document.querySelectorAll('.slides img');
  
  slideIndex--;
  
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  const slides = document.querySelectorAll('.slides img');
  
  slideIndex++;
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  
  slides[slideIndex].style.display = 'block';
}

setInterval(showSlides, 3000);

showSlides();