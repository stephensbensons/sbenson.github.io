//FUNCTIONS

/* 1. The two phases to using functions: 
*First we must define a function. 
*Next we can call a function by using its name, followed by parenthesis. 
*/

//2. Parameters are essentially placeholders for the values that reside as arguments when the function is called.

/*3. Named function syntax
*
*   function namedFunction(param1, param 2) {
*       function body
*       function body
*       return statement
*       }
*/

//4. Assign a function to a variable

    function newFunction() {
        var num = 10;
    }
    
/*5. Functions can OPTIONALLY take inputs. 
If inputs are needed, parameters are used as placeholders within the parentheses after the function name. 
By doing this, when the function is called, arguments can be passed in the parentheses following the name.
*/

    function newFunction(param1, param2) { //param1 and param2 are the parameters or placeholders
        return param1 + param2; // returns 9
    }
    
    newFunction(5,4); // 5 and 4 represent the arguments or values that will represent param1 and param2 in the function.
    
//By including a return statement in the function, it will output 9.

//6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
 
//In this example, a variable in the global scope is modified within the function.
        var numb = 10;

        function newerFunction() {
        numb = 5;
        console.log(numb);//=>prints 5
       }
        newerFunction();

/* 7.Closures are defined by functions that have access to a parent scope even after the parent scope
*has closed. Functions form closures around the data they house. If an object returned from the Function 
*and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 
*/ 
//

//Ex:

var myObject = {
  key1 : 'car',
  key2 : 'house'
}
        
        function newFunction() {
            return myObject;
        }

        newFunction();
        
