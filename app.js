// 1. Generate three random, non-dupe images (part of the controller)
// 2. Object constructor for Products:
  // a. Include name, path, votes
// 3. A tracker object that will controll functionality of app
// 4. Event listener(s) for image clicks

//Only using the 'bs' to start just ot make debugging easier.
var productImageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg',];

//'Not sure why that last element in the array is discolored? -- Inquire later//

//I know I'm going to need to count the total number of clicks regardless of how I generate images//
var clickCounter = 0;

//Need to grab a random number to later pick three random pictures from the array//
function displayImage(){
    var num1 = Math.floor(Math.random() * (productImageNames.length));
    var num2 = Math.floor(Math.random() * (productImageNames.length));
    var num3 = Math.floor(Math.random() * (productImageNames.length));
    document.canvas1.src = productImageNames[num1];
    document.canvas2.src = productImageNames[num2];
    document.canvas3.src = productImageNames[num3];
};



//  for (var i = 0; i < 3; i++) // FOR LOOP


// // a simple IIFE to build all the product images
// (function() {
//   // build the objects
// })()
//
// var tracker = {
//   // lots of properties and methods
// }
