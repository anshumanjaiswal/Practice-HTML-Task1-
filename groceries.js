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
slider1.addEventListener('input', slideOne);
  slider2.addEventListener('input', slideTwo);

// apply filter on items

const productsContainer = document.querySelector(".products");

function displayProducts(products){
  if(products.length>0){
    const product_details = products.map((product)=>`
    <div class="product">
      <div class="img">
        <img src="${product.img}" alt="alt"/>
      </div>
      <div class="product-details">
        <span class="name">${product.name}</span>
        <span class="amt">${product.amt}</span>
        <span class="seller">${product.seller}</span>
      </div>
    </div>`
  ).join("");
    productsContainer.innerHTML=product_details;
  } else {
    productsContainer.innerHTML = "<h3>No products available</h3>";
  }
  }


const priceRange1 = document.querySelector("#slider1");
const priceRange2 = document.querySelector("#slider2");
const priceValue1 = document.querySelector("#range-1");
const priceValue2 = document.querySelector("#range-2");

function priceFilter() {
  const price = document.querySelector(".amount");
  const minPrice = Math.min(price);
  const maxPrice = Math.max(price);
  priceRange1.min = minPrice;
  priceRange2.max = maxPrice;
  priceValue1.textContent = minPrice;
  priceValue2.textContent = maxPrice;

  priceRange1.addEventListener("input", (e) => {
    priceValue1.textContent = e.target.value;
displayProducts(data.filter((product)=>product.amount <= e.target.value));
  });

  priceRange2,addEventListener("input", (e) => {
    priceValue2.textContent = e.target.value;
    displayProducts(data.filter((product)=>product.amount <= e.target.value));
  });
}

console.log(priceFilter());

