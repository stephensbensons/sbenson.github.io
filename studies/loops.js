//LOOPS
// Loops are javascript mechanisms that will allow for iterating over a given number of characters or numbers or key/value pairs in the case of an object.

//1. While loops consist of a stopping condition, incrementer or decrementer, and a condition in the code block.


var counter = 0; //starting condition

while (counter < 5) { //the conditional statement is telling counter which is equal to 0 to count while it's less than 5
    console.log(counter); //=> prints 0,1,2,3,4 to the console 
    counter++; //this is telling counter to increment
}

//For loops have a starting condition, stopping condition, and incrementer or decrementer all within parentheses before the code block

for (var i = 0; i < 5; i++) { // i = 0 is the starting condition, i < 5 is the stopping condition, and i++ is the incrementer.
    console.log('Hi');//=>prints Hi five times.
}

//For-in loops are used to iterate over objects

var object1 = {
    firstName : "Stephen",
    lastName: "Benson"
}

for (var key in object1) { //object1 represents the object I will be looping over
    console.log(key); //=> prints the key firstName, then moves to the next line
    console.log(object1[key]);//=>prints the value of the firstName key which is Stephen. After it loops back over and collects the last name key followed by it's value.
    
}
//After running this code it will print:
/* firstName
*Stephen
*lastName
*/ Benson

//2. Looping up to some limit and loop down to 0.

 //looping up from zero to four
 
    for (var a = 0; a < 5; a++) {
        console.log(a);//=> prints 0,1,2,3,4
    } 
  
  //looping down from 5 to zero 
  
    for (var b = 5; b >= 0; b--) {
        console.log(b);//=>console log prints 5,4,3,2,1,0
    }
    
//3. Loop over an array forwards and backwards

//Forwards

var array = [1,2,3,4,5];
for (var c = 0; c < array.length; c++) {
    console.log(array[c]);//=>prints 1,2,3,4,5
}

//Backwards

for (var d = array.length-1; d >= 0; d--) {
    console.log(array[d]);//=> 5,4,3,2,1
}

//4. Looping over an object

var object1 = {
    firstName : "Stephen",
    lastName: "Benson"
}

for (var key in object1) { //object1 represents the object I will be looping over
    console.log(key); //=> prints the key firstName, then moves to the next line
    console.log(object1[key]);//=>prints the value of the firstName key which is Stephen. After it loops back over and collects the last name key followed by it's value.
    
}
//After running this code it will print:
/* firstName
*Stephen
*lastName
*/Benson
    
    