/* Task - 1 
Створіть об'єкт "Людина" з щонайменше трьома властивостями (рік, ім'я, прізвище). 

Завдання:
- Напишіть метод getInfo(), який виводитиме всі властивості об'єкта у вигляді пар "ключ: значення". 
- Напишіть метод getFullName(), який виводитиме повне ім'я. 
*/

function createHuman(year, firstName, lastName){
   let human = new Object(); 
   human.year = year;
   human.firstName = firstName;
   human.lastName = lastName;
   return human;
}

const human = createHuman(1997, "John", "Nerobot");

function getInfo(obj){
   for (let key in obj){
      console.log(key + ": " + obj[key]);
   }
} 

function getFullName(obj){
   console.log(obj.firstName + " " + obj.lastName);
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
   //Нужно для того что бы избавится от ссылки на объект human
   for(let key in obj){
      clone[key] = obj[key];
   }

   return Object.assign(clone, robot);
}

let robot = createRobot(human);
console.log(human);
console.log(robot);

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

function price(obj){
   let sum = 0;
   for(let key in obj) {
      sum += parseInt(obj[key]) 
   }
return sum;
}


function minPrice(obj){
   let min = Infinity;
   for(let key in obj) {
      if (min > parseInt(obj[key])) 
      min = parseInt(obj[key]) 
   }
return min;
}

function maxPrice(obj){
   let max = -Infinity;
   for(let key in obj) {
      if (max < parseInt(obj[key])) 
      max = parseInt(obj[key]) 
   }
return max;
} 

console.log("Общая сумма услуг = " + price(services) + " грн");
console.log("Минимальная цена услуги = " + minPrice(services) + " грн");
console.log("Максимальная цена услуги = " + maxPrice(services) + " грн");





