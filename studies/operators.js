/*Operators performs some operation on single or multiple operands (data value) and produces a result. 
*For example 2 + 3, where + sign is an operator and 2 is left operand and 3 is right operand. + operator adds two numeric values and produces a result which is 5 in this case.
*/

//1. Assignment Operators
//Assignment operators are used to assign values to Javascript variables.
            
            var x = 10; //=>Here the equal sign is being used to assign to the the variable x.
            console.log(x);//=>prints 10 

//2. Arithmetic Operators are used to perform arithmetic between variables and/or values.
//Examples of arithmetic operators include addition(+), subtraction(-), multiplication(*), division(/), division remainder(%), increment(++), and decrement(--).

            var y = 5;
            var z = y +2;
            console.log(z);//=>prints 7
            
            var m = 5;
            var sub = m - 2;
            console.log(sub);//=> prints 3
            
//3. Comparison Operators are used to determine equality or difference between variables or values.
// These include equalt to (==), strict equal to comparison (===), greater than(>), less than(<), greater than or equal to(>=), and less than or equal to(<=).

            var q = 8;
            var t = '8';
            console.log(q == t);//=>prints true
            
//Strict comparison will return false if both data types are different from one another.

            var l = 8;
            var k = 8;
            console.log(l===k);//prints false
            
//Here is an example of using a comparison operator to determine whether a variables value is greater or less than.

            var a = 6;
            var b = 8;
            console.log(a>b); //=>prints false
            console.log(a <= b); //=> prints true
            
//3. Logical Operators are used to determine the logic between variables or values.

//&& can be used to say 'and' to tie comparisons together

        var val = 6;
        var val2 = 8;
        console.log(val<10 && val2<8);//=>prints true
        
// || two vertical lines are used to denote or when making comparison.

        var num1 = 6
        var num2 = 10
        console.log(num1 < 10 || num2 < 11);//=>prints false
        
//5. Unary Operators (!, typeof, - )

//An operator is unary if it has a single operand
//(-) is a unary negation operand which will reverse the sign of a number.
            
            var pos = 1;
            pos = -pos;
            console.log(pos);//prints -1
            
//(!) is a unary operator that is used to denote if something is not supposed to be true.

            var untrue = 10;
            if (untrue != 11) {
                console.log(true); //=> prints true
            }
            
//The typeof operator is used to evaluate data type

            var shape = "square";
            console.log(typeof shape);//=>prints string
            
//6.Ternary Operator
//It is the only javascript operator that takes three operands. It is frequently used as a shortcut for the if statement.
//Syntax is (a? b : c)

   function fee(isMember) {
        return isMember ? "$5.00" : "$10.00";
    }
    
    console.log(fee(true));

    console.log(fee(false));
    
            