// *******************************************
// DEFENSE PAGE JS START
// *******************************************

const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

let scrollAmount = 0;
const cardWidth = sliderContainer.children[0].offsetWidth + 15; // Adjust margin

// Slide cards to the left
function slideLeft() {
  if (scrollAmount > 0) {
    scrollAmount -= cardWidth;
    sliderContainer.style.transform = `translateX(-${scrollAmount}px)`;
  }
}

// Slide cards to the right
function slideRight() {
  if (scrollAmount < (sliderContainer.scrollWidth - sliderContainer.offsetWidth)) {
    scrollAmount += cardWidth;
    sliderContainer.style.transform = `translateX(-${scrollAmount}px)`;
  }
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', slideLeft);
nextBtn.addEventListener('click', slideRight);
// *******************************************
// DEFENSE PAGE JS END
// *******************************************
