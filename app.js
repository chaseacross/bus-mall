// 1. Generate three random, non-dupe images (part of the controller)
// 2. Object constructor for Products:
  // a. Include name, path, votes
// 3. A tracker object that will controll functionality of app
// 4. Event listener(s) for image clicks

//Only using the 'b' items to start just ot make debugging easier. Theoretically, adding in more items to the array won't matter if it works.
var productImageNames = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg',];
var productSelections = []


//I know I'm going to need to count the total number of clicks regardless of how I generate images//
var clickCounter = 0;

//Using an IFFE to generate random pictures on page load//
(function loadingImages(){
  var gen_nums = [];

  function in_array(array, el) {
     for(var i = 0 ; i < array.length; i++)
         if(array[i] == el) return true;
     return false;
  }
  function get_rand(array) {
      var rand = array[Math.floor(Math.random()*array.length)];
      if(!in_array(gen_nums, rand)) {
         gen_nums.push(rand);
         return rand;
      }
      return get_rand(array);
  }
  var threeRandom = [];
  for(var i = 0; i < 3; i++) {
      threeRandom.push(get_rand(productImageNames));
  }
  document.canvas1.src = threeRandom[0];
  document.canvas2.src = threeRandom[1];
  document.canvas3.src = threeRandom[2];
})();

//Need to grab a random number to later pick three random pictures from the array//
function displayImage(){
  if (clickCounter < 15) {
    var gen_nums = [];

    function in_array(array, el) {
       for(var i = 0 ; i < array.length; i++)
           if(array[i] == el) return true;
       return false;
    }
    function get_rand(array) {
        var rand = array[Math.floor(Math.random()*array.length)];
        if(!in_array(gen_nums, rand)) {
           gen_nums.push(rand);
           return rand;
        }
        return get_rand(array);
    }
    var threeRandom = [];
    for(var i = 0; i < 3; i++) {
        threeRandom.push(get_rand(productImageNames));
    }
    document.canvas1.src = threeRandom[0];
    document.canvas2.src = threeRandom[1];
    document.canvas3.src = threeRandom[2];
    clickCounter++;
  }
};

//using this to test counter function//
function counterButton(){
  alert('Click counter is at ' + clickCounter +'.');
  alert('Product selections: ' + productSelections);
};




//TO COUNT CLICKS, HAVE THE NUMBER (num) PICKED PASS INTO AN ARRAY, THEN AT 15
//COUNT INSTANCES, PERHAPS WITH A FOR LOOP THAT PULLS THE NUMBER OUT OF THE ARRAY//

// // a simple IIFE to build all the product images
// (function() {
//   // build the objects
// })()
//
// var tracker = {
//   // lots of properties and methods
// }
