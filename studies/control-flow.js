//CONTROL FLOW is the order in which the computer executes statements in a script.

//If, else-if, else, and switch are all tools to help order the control flow in a manner that is appropriate given a set of circumstances.

/*1. If statements use the keyword if to check for a specific condition. 
The condition being checked must be inside parentheses. If it is true, code wrapped in curly braces, which forms the code block, will run.
*/

var a = 8;
var b = 8;

if (a === b) {
    console.log(true);//=> prints true
}

//2. Else-if statements are used within if statements if the previous conditional statement is false.

var c = 5;
var d = 4;

if (c === d) {
    console.log(true);
} else if ( c > d) {
    console.log('c is greater');//=> prints c is greater since c the first statement wasn't true.
}

//3. Else statments can also be added if all other conditions are false. Since else statements are defaults there is no condition to check for.

var e = 10;
var f = 15;

if (e === f) {
    console.log(true);
} else if (e > f) {
    console.log('e is greater');
} else {
    console.log("f is greater");
}

/*4. Switch is a type of conditional statement that will evaluate an expression multiple possible cases 
*and execute one or more blocks of code based on matching cases. 
*Switch statements are written similar to if statements with a conditional expression in parentheses that needs to meet certain requirements to run the code block.
*Break is a keyword in switch statements that will end the code once it meets the requirements of the case expression.
*/

var grade = 87;

switch (true) { 
    // If score is 90 or greater
    case grade >= 90:
        console.log("A");
        break;
    // If score is 80 or greater
    case grade >= 80:
        console.log("B");//=>prints B to the console since grade is greater than 80 but lower than 90
        break; // the break keyword ends the switch statement and it is thereby terminated.
    // If score is 70 or greater
    case grade >= 70:
        console.log("C");
        break;
    // If score is 60 or greater
    case grade >= 60:
        console.log("D");
        break;
    // Anything 59 or below is failing
    default:
        console.log("Sorry bud, you failed");
}
