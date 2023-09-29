window.onload = function(){
  slideOne();
  slideTwo(); 
}

let displayValOne = document.getElementById("range-1");
let displayValTwo = document.getElementById("range-2");
let slider1 = document.getElementById("slider-1");
let slider2 = document.getElementById("slider-2");
let minGap = 1;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
  if(parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
    slider1.value = parseInt(slider2.value) - minGap;
  }
  displayValOne.textContent = slider1.value;
  fillColor();
} 

function slideTwo() {
  if(parseInt(slider2.value) - parseInt(slider1.value) <= minGap) {
    slider2.value = parseInt(slider1.value) + minGap;

  }
  displayValTwo.textContent = slider2.value;
  fillColor();
}

function fillColor() {
  percent1 = (slider1.value / sliderMaxValue) * 100;
  percent2 = (slider2.value / sliderMaxValue) * 100;
  sliderTrack.style.background =  `linear-gradient(to right, #dadae5 ${percent1}%, #3264fe ${percent1}%, #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
}
  
