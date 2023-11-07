/*Task - 1
  Replace the "for" loop with a "while" loop


for (let i = 0; i < 8; i++) {
  console.log( `число - ` + i);
}*/


// let i = 0;
// while(i < 8){
//     console.log( "число - " + i);
//     i++;
// }


/*Task - 2
  Implement algorithm which will calculate sum of numbers from 0 to 50 (included) not divisible by 3.
  Use 3 different cycles: for | while | do..while */
  
var sum = 0;
  for (var i = 0; i <= 50; i++){
    if( i % 3 != 0 ){
        sum += i;
        console.log(i);
    }
  }
  console.log(sum);

var i = 0;
var sum = 0;
  while( i <= 50 ){
        if( i % 3 != 0 ){
            sum += i;
        }
        i++;
    }
console.log(sum);

var i = 0;
var sum = 0;
do{
  if( i % 3 != 0 ){
    sum += i;
  }
i++;
} while(i <= 50)

console.log(sum);

/* Task - 3
  Implement algorithm which will
  calculate sum of numbers from firstNumber to secondNumber (included)
  Use for loop  
*/

let firstNumber = -100;
let secondNumber = 250;
var sum =0;

for(let i = firstNumber; firstNumber<=secondNumber; firstNumber++){
  sum += firstNumber;
}
console.log(sum);

/* Task - 4
  Make a timer that will count from 10 to 0

  For example,
  10 seconds left
  9 seconds left
  8 seconds left 
*/

for(let i = 10; i >= 0; i--){
  if(i == 0){
    console.log("Btoom!!!");
  }else {console.log(i + " seconds left");}
}

/* Task - 5
  Create program to display the following sequence: 7 14 21 28 35 42 49 */
  for(let i = 7; i < 50; i+=7 ){
    console.log(i);
  }

/* Task - 6
  implement algorithm which calculates factorial for 
  using for, while, do..while operators
  assign the result to corresponding variable
  what is factorial: https://www.mathsisfun.com/numbers/factorial.html 
*/

var numberFactorial = 7;
let result = numberFactorial;

for(let i = numberFactorial-1; i > 1 ; i--){
  console.log(i);
  console.log(result *= i);
}

/* Task - 7
  implement algorithm filling a bathtub using buckets. 
  we know how many liters the bathtub holds and the capacity of one bucket, but we don't know how many buckets we need. 
  We need to fill the bathtub without overflowing it.
  Use while loop 
*/

let bucket = 5; //capacity of one bucket
let initialBathState = 0; //the initial value of the amount of water in the bathroom
let bathCapacity = 60; //

while(initialBathState <= bathCapacity){
  
}