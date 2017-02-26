// 1. Generate three random, non-dupe images (part of the controller)
// 2. Object constructor for Products:
  // a. Include name, path, votes
// 3. A tracker object that will controll functionality of app
// 4. Event listener(s) for image clicks

var productImageNames = ['img/bag.jpg', 'img/banana.jpg', 'img/bathroom.jpg', 'img/boots.jpg', 'img/breakfast.jpg', 'img/bubblegum.jpg', 'img/chair.jpg', 'img/cthulhu.jpg', 'img/dog-duck.jpg', 'img/dragon.jpg', 'img/pen.jpg', 'img/pet-sweep.jpg', 'img/scissors.jpg', 'img/shark.jpg', 'img/sweep.png', 'img/tauntaun.jpg', 'img/unicorn.jpg', 'img/usb.gif', 'img/water-can.jpg', 'img/wine-glass.jpg'];

//'Not sure why that last element in the array is discolored? -- Inquire later//

var clickCounter = 0;

//Need to grab a random number to later pick three random pictures from the array//
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findImage(name, src){
  this.name = name;
  this.image = src;
  this.timesSelected = 0;
  this.picked = 0;
}

var productsArray = [];

function Products() {

}

// a simple IIFE to build all the product images
(function() {
  // build the objects
})()

var tracker = {
  // lots of properties and methods
}

someEl.addEventListener('click', function(e) {

})
