"use strict";

const carouselCollection = ["Bard", "Rouge", "Paladin", "Thief"];

//TODO get elements from dom
const carouselContent = document.querySelector("#carousel-content");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

let currentSlide = 0;
const maxLength = carouselCollection.length - 1;

//TODO Show first element in the array by default
carouselContent.innerHTML = `<h2>${carouselCollection[currentSlide]}</h2>`;

//TODO add next logic
function getNextItem() {
  if (currentSlide === maxLength) {
    currentSlide = 0;
    carouselContent.innerHTML = `<h2>${carouselCollection[currentSlide]}</h2>`;
  } else {
    currentSlide++;
    carouselContent.innerHTML = `<h2>${carouselCollection[currentSlide]}</h2>`;
  }
}
//TODO add previous logic
function getPrevItem() {
  if (currentSlide === 0) {
    currentSlide = carouselCollection.length;
  }
  currentSlide -= 1;
  carouselContent.innerHTML = `<h2>${carouselCollection[currentSlide]}</h2>`;
}
//TODO set event listeners
nextBtn.addEventListener("click", getNextItem);
prevBtn.addEventListener("click", getPrevItem);
