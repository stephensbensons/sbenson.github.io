//DATATYPES: distinguish what kind of data can be stored and manipulated within a program

//1. Numbers
/*Any numerical value: positive, negative, or with decimal points. 
*Numbers can be added, subtracted, divided and multiplied in javascript
*New values can be created with arithmetic expressions.
*/

var myNum = 5;//=> regular number
var myNum = 1.5;//=> decimal number
var myNum = 4 + 5;//=> mathematical expression

//2. Strings
/*A string is a collection of character or symbols surrounded by quotes ('' or "")
* Strings can be combined using the + operator
* Strings also have a length property that returns the total number of character the string contains.
*/

var strings ="stringy";
var newStrings = strings + ' things';
console.log(newStrings);//=> prints 'stringy things'

//3. Boolean
/*A true or false value. Booleans can be thought of as being similar to on or off statements
*since they are binary. They are typically used in conditional statements.
*/

    var time = 3;
    function boo() {
        if (time===3) {
            return true;
        } else {
            return false;
        }
    }
   boo();//=> returns true
   
//4. Array

// An array is a complex data type that is used to store multiple data types

var myArray = [];//this is an array literal assigned to a variable called myArray.

var myArray = ['a', 'b','c'];//this is an array that contains a string data type.
   
//Every value in the list has an index, which is its numerical position of the value in the index.
 
 var myArray = ['a', 'b', 'c'];
 console.log(myArray[1]);//=> prints 'b' to the console
 console.log(myArray.length);//=>prints 3 since there are 3 three characters
 
 //5. Object
 /* An object literal is a complex datat type that is used to store data.   
*Usually a collection of data relating to a single object/identity stored in curly braces {}
*Objects are similar to arrays but instead of using indexes, values are stored within keys in objects.
*Objects can contain references to any other data types, including strings, numbers, booleans, functions, other array and objects
*/
        var myObject = {};//this is an object literal assigned to a variable named myObject
        myObject = {
            key1 : 'a',
            key2 : 'b',
        };//this is an object with string data types assigned to key1 and key 2
        
//Objects do not have a length property
//Every value has a corresponding key.

//object access examples

//bracket notation

 myObject['key1'];//gives us 'a'

//dot notation

myObject.key2;//gives us 'b'

//6. Functions
/*Functions are reusable blocks of code that accept inputs, process those inputs, and will return a new data value.
*There are four parts to a function declaration: name, parameter/arguments, function body and a return statement.
*
*           function name(args) {
*           function body
*           function body
*           return statement
*         }
*
*/

        function multiply(num1, num2) {
            return num1 * num2;
        }
        
        multiply(2, 5);//=>returns 10
        
//7. Undefined
//A term that would be printed or returned if a variable has been declard but not assigned a value.

    var undef;
    console.log(undef);//=> prints undefined
    
//8. Null  
/*A special data type that can have only on value - the null value
*A null value means that there is no value. It is not equivalent to an empty string or 0, it is simply nothing.
*A variable can be explicitly emptied of its current contents by assinging it the null value.
*/ 

    var a = null;
    console.log(a);//=> prints null to the console
    
//9. NaN
// NaN represents a special Not-a-Number value. It is a result of an invalid or an undefined mathematical expression.

    var a = "text"/2;
    console.log(a);//=>prints NaN 
    
//10. Infinity & -Infinity
//Infinity represents the mathematical infinity which is greater than any number.

//In this example, infinity is the result of dividing a nonzero number by 0.

var a = 16/0;
console.log(a);//prints infinity

var a = -16/0;
console.log(a);//prints -infinity

//11. Primitive/Simple data types vs. Complex data types

//Primitive data types can hold only one value at a time and are immutable.
//They can also be compared be compared by value
//examples include number, character, string, NaN, null, and undefined.
//The largest primitive data type is a number and it allows for 8 bytes of memory to be allocated.

var number1 = 5;
var number2 = 5;
number1 === number 2; //=> true
var string1 = 'This is a string.';
var string2 = 'This is a string.';
string1 === string2; //=> true

//Complex data types include objects, arrays, and functions.
//Complex data types can be of any size in contrast to primitve data types.

//12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
//Primitive values simply copy the value from one variable to the next
        
            var a = 1;
            var b = a;
            
            b = 2;//=> changing the value of b won't effect var a.
            console.log(a);//=>prints 1
            
//Complex types are copied by reference.

            var object1 = {
                key1: "value"
            };
            
            var object2 = object1;

//Here Object2 is equal to Object1 by reference. It doesn't actually copy the values but refers to the address where the values are stored.

//For example, if I change a change the value of object2, it will effect object1 because they both point to the same location.

        object2.key1 = "anothervalue";        
        console.log(object1.key1);//=> prints anothervalue

//This then illustrates that even when you change a value in the copied object, in this case object2, it will effect object1 because they do not exist as separate entities but refer back to the same object.