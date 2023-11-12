/* Task - 0
    Create a function task1Func which will always return true
*/
function task1Func(){
    return true;
}
console.log(task1Func());

/* Task 1
    Write a function min(a, b) that returns the lesser of two numbers a and b.

    For example,
    min(2, 5) == 2
    min(3, -1) == -1
    min(1, 1) == 1
*/

function min(a, b){
    if (a > b){
        return b;
    }{
        return a;
    }
}
console.log(min(2, 5))// == 2
console.log(min(3, -1))// == -1
console.log(min(1, 1))// == 1

/* Task 2
    Write a function pow(x, n) that returns the number x raised to the power of n. 
    In other words, it multiplies the number x by itself n times and returns the result.

    For example,
    pow(3, 2) = 3 * 3 = 9
    pow(3, 3) = 3 * 3 * 3 = 27
    pow(1, 100) = 1 * 1 * ...* 1 = 1
*/

function pow(x, n){
    //return x ** n;
    let value = x;
    for (let i = 1; i < n; i++ ){
        x*=value;
    }
    return x;
}

console.log( pow(3, 2));
console.log( pow(3, 3));
console.log( pow(1, 100));

/* Task 3
    Remake a function from the task 2
    * just make second parameter to have a default value equal 5

*/

function pow(x, n = 5){
    //return x ** n;
    let value = x;
    for (let i = 1; i < n; i++ ){
        x*=value;
    }
    return x;
}

console.log( pow(3));
console.log( pow(3, 3));
console.log( pow(1, 100));

/* Task 4
   Create a variable  which will return a function
    which will take parameter pet as a number (where 1 stands for pizza, 2 is spagetti and 0 is other)
    and returns text ee.g. "My lunch for today is pizza"
    Use function expression with arrow function notation
*/

  let func = (pet) => { 
    switch (pet) {  
        case 1: pet = "pizza"; break;
        case 2: pet = "spagetti"; break;
        case 0: pet = "other"; break;
        default: pet = "other"; break;
    }
        return "My lunch for today is " + pet;
}

console.log(func(1));


/* Task 5 (Not required)
    You need to draw a rectangular triangle of stars (or pluses, or some other symbol) in the console: one star on the first line, two on the second, and so on. 
    Write your solution in the form of a function that takes two parameters: the height of the triangle and the symbol you want to use to draw it.

    Example, 
    drawTriangle(5, *);
*
**
***
****
*****

*/

let getRectangular = (heigth, symbol) => {
    let line = '';
    for(let i = 0; i < heigth; i++){
        line += symbol;
        console.log(line);
    }
}

getRectangular(7, "*");


/* Task 6 (Not required)
    Callback
    Create a function (e.g. function1)  which will take another function (e.g. function2) as an argument
    and returns result of execution of that another function in string format
 
    Example,
    if function2  returns "THIS IS THE RESULT OF CALLBACK FUNCTION"
    than function1 should return "The result = THIS IS THE RESULT OF CALLBACK FUNCTION"
*/
function function1(callback){
    return "The result = " + callback();  
}

function function2(){
    return "THIS IS THE RESULT OF CALLBACK FUNCTION";
}

console.log(function1(function2));



/* Task 7 (Not required)
    Create a function task13Func which returns word google with given numbers of "o" symbols
    Example
    funcName(7) // => gooooooogle
*/

let task13Func = (number) => {return "g" + "o".repeat(number)+ "gle"} 

console.log(task13Func(7));