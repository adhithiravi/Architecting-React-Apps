// Select all carousel images and buttons once
let carouselImages = document.querySelectorAll(".carousel-image");
let carouselButtons = document.querySelectorAll(".carousel button");

// Apply initial transforms to position images side-by-side
carouselImages.forEach((image, idx) => {
  image.style.transform = `translateX(${idx * 100}%)`;
});

// Function to handle carousel navigation
function updateCarousel(activeIndex) {
  carouselImages.forEach((image, idx) => {
    image.style.transform = `translateX(${(idx - activeIndex) * 100}%)`;
  });

  // Update button active state
  carouselButtons.forEach((button, index) => {
    button.classList.toggle("active-carousel-item", index === activeIndex);
  });
}

// Add event listeners to carousel buttons
carouselButtons.forEach((button, index) => {
  button.addEventListener("click", () => updateCarousel(index));
});
