// 'if' conditional

/* Task - 1
 Create a program that will store the value of the cat's weight. 
If the cat weighs less than 5 kg, then the cat is small and still needs to be fed, 
if it weighs moe than 5, then the cat is very fluffy and needs to be combed :) */
let catWeight = 4;
if (catWeight < 5 && catWeight > 0){
    console.log("Я маленькая, покорми меня!")
    }else if(catWeight >= 5){
        console.log("Я пушистая, расчеши меня!")
        }else{
            console.log("Что-то не то с весом!")
            }

/* Task - 2
Write an if condition to check if the age value is NOT between 18 and 50 inclusive, if it is not, then hire */

//let age = 51;
if(age >= 18 && age <= 50 ){
    console.log("You're hired!")
        }else {
        console.log("Not in the range")
        } 

/* Task - 3
Write a program for checking grades.
If the grade is A and B, the student has passed the exam
If C and D - we send them for a retake
If E - expulsion. */
let grade = "E";
if(grade == "A" || grade == "B"){
        console.log("Exam passed!");
    }else if(grade == "C" || grade == "D"){
        console.log("To retake!");
        }else if(grade == "E"){
            console.log("Expulsion!");
            }else{
                console.log("It's not an grade!");
            }


/* Task - 4
 Write a small program "Guess the number", where you need to enter a number from the console and tell the user whether he entered less or more or guessed the number. */
 
var prompt = require('prompt-sync')();
var userNumber = prompt('Enter value = ');
var targetNumber = 52;
if(+userNumber === targetNumber){
  console.log("You guessed the number");
  } else if (+userNumber > targetNumber){
    console.log("Less");
    } else if (+userNumber < targetNumber){
      console.log("More");
      } else{
        console.log("It's not a number");
        }


 /* Task - 5
Rewrite the if statement using the conditional operator '?

if (height < 140) {
  console.log("Заборонено на атракціон");
} else {
    console.log("Проходьте, будь ласка!");
}
 */

//let height = 139;
height < 140 ? console.log("Заборонено на атракціон") : console.log("Проходьте, будь ласка!");

/* Task - 6

Rewrite if..else using several ternary operators '? 

if (height < 50) 
{
     console.log("Forbidden to use attraction"); 
    } else if (height >= 50 && height < 80) {
         console.log("Permit - attraction №1");
         } else if (height >= 80 && height < 120) {
             console.log("Permit - attraction №1 or №2"); 
            } else { 
                console.log("Permit - All"); }
*/
let height = 34;
(height < 50) ? console.log("Forbidden to use attraction") : 
  (height >= 50) && (height < 80) ? console.log("Permit - attraction №1") : 
    (height >= 80) && (height < 120) ? console.log("Permit - attraction №1 or №2") : console.log("Permit - All");


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'switch' conditinal

/* Task - 7
 Create a program that will print the day of the week according to the day number. */
 let numberOfDay = 8;
 switch (numberOfDay) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Thursday");
      break;
    case 5:
      console.log("Friday");
      break;
    case 6:
      console.log("Saturday");
      break;
    case 7:
      console.log("Sunday");
      break; 
    default:
      console.log("Are you from another planet?");
      break;
}



/* Task - 8
 Make a program that will display the time of year a particular month number belongs to (for example, I enter "1" and it tells me that it is winter, I enter "5" - spring, etc.) */

let month = 1;
switch (month) {
   case 12:    
   case 1:
   case 2:
    console.log("Winter");
     break;
   case 3:
   case 4:
   case 5:
     console.log("Spring");
     break;
   case 6:
   case 7:
   case 8:
      console.log("summer");
      break;
   case 9:
   case 10: 
   case 11:
      console.log("Autumn");
      break;
   default:
     console.log("Are you from another planet?");
     break;
}
 /* Task - 9
 Rewrite the "switch" into an "if"
 
 switch (browser) {
  case 'Edge':
    console.log( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    console.log( 'We hope that this page looks ok!' );
}
 */

if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
  console.log( 'Okay we support these browsers too' );
  }else if(browser === 'Edge'){
    console.log( "You've got the Edge!" );
    } else {
      console.log( 'We hope that this page looks ok!' );
      }

/* Task - 10
Rewrite "if" into "switch" 

let age = 16;
if (age < 16) {
    console.log( 'We cant hire u!' );
}
if (age >= 18) {
  console.log( 'U can take full time job' );
}

if (age == 16 || a == 17) {
  console.log( 'U can take part time job' );
}
*/
let age = 17;
switch(true){
  case age < 16: 
   console.log( 'We cant hire u!' );
    break;
  case (age >= 18): 
    console.log( 'U can take full time job' ); 
    break;
  case (age == 16) || (age == 17):
    console.log( 'U can take part time job' );
    break;
  default: 
    break;
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/* Task - 11
Create a program  - https://take.ms/mN65i 

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”

Use only what've learned!

*/

var prompt = require('prompt-sync')();
Login = prompt('Enter Login = ');

if(Login === "Admin"){
  Password = prompt('Enter Password = ');
    if(Password ==="TheMaster"){
      console.log("Welcome!")
    }else if (Password === "" || Password === "Esc"){
      console.log("Canceled");
      }else {
        console.log("Wrong password");
        }
} else if(Login === "" || Login === "Esc"){
 console.log("Canceled");
}else{
  console.log("I don’t know you");
}

