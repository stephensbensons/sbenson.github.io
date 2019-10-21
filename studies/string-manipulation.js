//STRING MANIPULATION: Strings can be manipulated either by using operators or by invoking a method to perform a certain action.

//1. String manipulation by using operators 

    var a = "strings are";
    var b = "a series of characters.";
    console. log(a + " " + b);
    
//Here I used the + operator to join the string values of var a and b and added a space with " " between them to print a sentence.

//2. There are a variety of built in methods in javascript to manipulate strings.
//methods are invoke by calling the variable followed by a period and then the name of the method.

var str = "How are you doing today?";
console.log(str.toUpperCase());//=>prints HOW ARE YOU DOING TODAY?
console.log(str.toLowerCase());//=>prints how are you doing today?


