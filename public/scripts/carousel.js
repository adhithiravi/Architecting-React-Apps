let carousel_images = document.querySelectorAll(".carousel-image");

carousel_images.forEach((image, idx) => {
  image.style.transform = `translateX(${idx * 100}%)`;
});

let carousel_image_1 = document.querySelectorAll(".carousel-image")[0];
let carousel_image_2 = document.querySelectorAll(".carousel-image")[1];
let carousel_image_3 = document.querySelectorAll(".carousel-image")[2];

document.querySelector(".carousel-button-1").addEventListener(
  "click",
  (event) => {
    carousel_image_1.style.transform = `translateX(0)`;
    carousel_image_2.style.transform = `translateX(100%)`;
    carousel_image_3.style.transform = `translateX(200%)`;

    document.querySelectorAll(".carousel button").forEach((button, index) => {
      button.classList.remove("active-carousel-item");
    });
    event.target.classList.add("active-carousel-item");
  },
  false
);
document.querySelector(".carousel-button-2").addEventListener(
  "click",
  (event) => {
    carousel_image_1.style.transform = `translateX(-100%)`;
    carousel_image_2.style.transform = `translateX(0%)`;
    carousel_image_3.style.transform = `translateX(100%)`;

    document.querySelectorAll(".carousel button").forEach((button, index) => {
      button.classList.remove("active-carousel-item");
    });
    event.target.classList.add("active-carousel-item");
  },
  false
);
document.querySelector(".carousel-button-3").addEventListener(
  "click",
  (event) => {
    carousel_image_1.style.transform = `translateX(-200%)`;
    carousel_image_2.style.transform = `translateX(-100%)`;
    carousel_image_3.style.transform = `translateX(0%)`;

    document.querySelectorAll(".carousel button").forEach((button, index) => {
      button.classList.remove("active-carousel-item");
    });
    event.target.classList.add("active-carousel-item");
  },
  false
);
