// MODAL

// Open Modal
const openModal = () => {
  document.getElementById('myModal').style.display = 'block';
};

// Close Modal
const closeModal = () => {
  document.getElementById('myModal').style.display = 'none';
};

// SLIDER

let slideIndex = 1;

// Show Slides
const showSlides = (n) => {
  let i;
  let slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('demo');
  let captionText = document.getElementById('caption');

  // Start again if we go too far
  if (n > slides.length) {
    slideIndex = 1;
  }

  // If < 1
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.display = 'block';

  dots[slideIndex - 1].className += ' active';

  captionText.innerHTML = dots[slideIndex - 1].alt;
};

showSlides(slideIndex);

// Next / Previous controls
const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

// Thumbnail image controls
const currentSlide = (n) => {
  showSlides((slideIndex = n));
};
