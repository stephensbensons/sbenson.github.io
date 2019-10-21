/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

//4. Differences between var, let, and const declarations//

/* A. var declarations are globally scoped when it's declared outside the function
*This means that the variable will be available for use in the whole window.
* var can also be function or locally scoped which means it will be available only
* within the function.
*/

var greet = "hi";

function newFunction() {
    var hello = "jello";
}

console.log(greeter); //=> prints hi

/*If I was to console.log var hello outisde the function I would get an error
* because var hello is locally or function scoped.
*/

console.log(hello);//=> ReferenceError: hello is not defined

/* B. let is a variable declaration that is block scoped. This means that it can
* only be accessed and available for use within a block of code which is enclosed in curly braces {}
*/

let something = "say bye";
let times = 4;

if(times > 2) {
    let hi = "say hi instead";
    console.log(hi); //=> prints "say hi instead"
}
console.log(hi); //=> prints ReferenceError:hi is not defined

//using 'hi' outside its block returns an error since let variables are block scoped

/* let, like var can be updated within its scope. Unlike var, a let variable 
cannot be redeclared within its scope. If the same variable is defined within different
*scopes there will be no error. 
*/
            
        let bye = "say bye";
        if (true) {
        let bye = "say goodbye";
        console.log(bye); //=> say goodbye
    }
        console.log(bye); //=> say bye
        
/* Const variable declarations with the const maintain constant values. 
*Const declarations are block scoped like lets; however, they cannot be updated or redeclard
*/

        const constant = "constant";
        constant = "unchanged";
        console.log(constant); //=>TypeError assignment to constant variable
        
// Every const declaraton must be initialized at the time of declaration

//5. Hoisting is another factor that defines var, let, and const declarations

/* Hoisting is a javascript mechanism where variables and function declarations
*moved to the top of their scope before code execution. 
*/

    console.log(seq);
    var seq = "sequence";
    
// This will be interpreted as

    var seq;
    console.log(seq);//=> prints undefined
    seq = "sequence";
    
//Var variables are hoisted to the top of their scope and initialized with a value of undefined.
/* let and const declarations are hoisted to the top of their scope. However, let and const declarations will not be initialized.
* If you try to use a let or const variable before declartion you'll get a ReferenceError. 
*/

    console.log(two);//=> prints ReferenceError:two is not defined
    let two = "two";