/* Task - 1 
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище). 

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
- Напишіть метод getFullName(), який виводитиме повне ім'я. 
*/

function createHuman(year, firstName, LastName){
   let human = new Object(); 
   human.year = year;
   human.firstName = firstName;
   human.LastName = LastName;
   return human;
}

const human = createHuman(1997, "John", "Nerobot");

function getInfo(obj){
   for (let key in obj){
      console.log(key + ": " + obj[key]);
   }
} 

function getFullName(obj){
   console.log(obj.LastName + " " + obj.firstName);
}

getInfo(human);
getFullName(human);


/* Task - 2 (Not required)
   Створіть функцію createRobot, яка створить об'єкт "robot" з об'єкта "person", 
   додавши додаткову властивість до об'єкта "person". 
   "Robot" повинен мати властивість "batteryEnergy" (наприклад, batteryEnergy = 50)

 * ПРИМІТКА: використовуйте метод присвоєння об'єктів (Object.assign)
*/


function createRobot(obj){
   let robot = new Object, clone = new Object;
   robot.batteryEnergy = Math.round(Math.random() * 100) + 1;
   
   for(let key in obj){
      clone[key] = obj[key];
   }

   robot = Object.assign(clone, robot);
   return robot;
}

let robot = createRobot(human);

/* Task - 3 
   Створіть isARobot, який буде перевіряти, чи є об'єкт роботом
   перевіркою наявності у об'єкта властивості (batteryEnergy)
*/

function isARobot(obj){
   if (obj.hasOwnProperty("batteryEnergy")){
      return true;
   }else {
      return false;
   }
}

console.log(human);
console.log(robot);

console.log(isARobot(human));
console.log(isARobot(robot));

/* Task - 4 (Not required)

Припустимо, у нас є об'єкт. Властивості об'єкта - назва послуги та її вартість:

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};

Завдання:
- створити метод price(), який обчислює та повертає загальну вартість "наданих послуг".
- створити метод minPrice() - який повертає мінімальний price
- створити метод maxPrice() - який повертає максимальний price
*/

var services = {
	"стрижка": "60",
	"гоління": "80",
	"Миття голови": "100"
};




