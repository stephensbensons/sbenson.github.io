// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
//Create a for loop to loop over an array and print its value to the console
// i = 0 is starting condition
//i <array.length; is stopping condition

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
 for (var i = 0; i < array.length; i++) {
      console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
//Use a for loop to print values in reverse
//Use var i = array.length-1 as a starting condition
//Use i >= 0 as a stopping condition
//decrement using i--
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length-1; i >= 0; i--) {
  console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
//use for in loop to extract data from an object
//use .push to send data into an array and then return array
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
var array = [];
for (var key in object) {
     array.push(key);
    //use .push once data is collected to create an array with the data
    
}
//use return statement to finish program after looping
return array;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 *
 */
//use a for var in key loop to loop over an object and print its keys using console.log
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {
      console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
//create an array literal to collect returned object values
//create a for var key in object to collect data
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var arraykey = [];
  for (var key in object) {
      arraykey.push(object[key]);
  }
  
  return arraykey;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
//use var in key to loop over the object
//use console log to print it's values
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object) {
      console.log(object[key]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
//create a variable to collect the data in an array
//create a var key in object to loop through the object
//use .push to push key data onto the variable
//return variable with .length to determine the length
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  var objectLength = [];
  for (var key in object) {
      objectLength.push(key);
      
  }
  return objectLength.length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
//create a new variable to receive the objects values in reverse
//create a var key in object to collect the values
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var reverse = [];
  for (var key in object) {
        reverse.push(object[key]);
  }
  for (var i = reverse.length-1; i >= 0; i--) {
  console.log(reverse[i]);
  }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
