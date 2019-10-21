// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
//With the function createGreaterThanFilter create another function that tests a value against the base and evaluates if the value is greater

function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
      return function(value) {
       if(value < base) {
           return false;
       } else {
           return true;
       }
   }

    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
//With the function createGreaterThanFilter create another function that tests a value against the base and evaluates if the value is less

function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
     return function(value) {
       if(base < value) {
           return false;
       } else {
           return true;
       }
   }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
//create a function that tests whether a string starts with the same character as what is given
  
  function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function(value) {
        if (value.startsWith(startsWith.toLowerCase()) || value.startsWith(startsWith.toUpperCase())) {
            return true;
        }
        return false;
    }
    
    
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
//create a function that tests whether a given string ends with the same character

function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function(value) {
        if (value.endsWith(endsWith.toLowerCase()) || value.endsWith(endsWith.toUpperCase())) {
            return true;
        }
        return false;
    }
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
//create an array that will collect the output
//use a for loop to loop over the string input that then sends the data to modify function
//Finally use .push to send the data to the array
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    var newArray = [];
   for(var i = 0; i < strings.length; i++) {
       newArray.push(modify(strings[i]));
   }
   return newArray
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    var counter = 0;
   for (var i = 0; i < strings.length; i++) {
       if(test(strings[i])) {
           counter++;
       }
   }
   if (counter === strings.length) {
       return true;
   } else {
       return false;
   }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}