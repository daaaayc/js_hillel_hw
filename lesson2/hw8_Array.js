/* Task - 1
    Створіть масив (array1) з 5 любих елементівю
    Створіть функцію, яка буде повертати другий елемент з масиву
*/

let array1 = [5, "test", 78, "Avrora", null];

function getSecondItem(arr){
    return arr[1];
}

console.log(getSecondItem(array1));

/* Task - 2
    Створіть функцію, який додасть 1 елемент до масиву з попередньої задачи (array1) (наприклад, "new item")
*/

function addNewItem(arr){
    arr[arr.length] = "newItem";
}


addNewItem(array1);
console.log(array1);


/* Task - 3
    Створіть другий масив (array2), потім створить функцію, яка отримує 2 масиви і повертає масив, що містить елементи з масивів array1 та array2
*/

let array2 = [7, "test2", 87, "arorvA", true];

function mergeTwoArray(fArray, sArray){
    return fArray.concat(sArray);
}


console.log(mergeTwoArray(array1,array2));
console.log(array1);
console.log(array2);



/* Task - 4 (Not required)
    Створіть функцію, яка буде повертає новий масив заданої довжини, заповнений заданим значенням
    https://www.w3schools.com/jsref/jsref_fill.asp
*/

function getArray(length, value){
    let arr = [];

    for(let i = 0 ; i< length; i++){
        arr[i] = "";
    }

    arr.fill(value, 0, length);
    console.log(arr)
    return arr; 
}

console.log(getArray(5, "Sio"));

/* Task - 5 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
     не використовуйте цикли
*/

/* Task - 6 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає кількість людей, чиє ім'я "John" або вік менший за 30
    * не використовуйте цикли
    * https://www.w3schools.com/jsref/jsref_filter.asp
*/
//переделать
let gameOfThrone1 = [{name: "John Snow", age: 45}, 
                    {name: "Cersei Lannister", age: 32}, 
                    {name: "Daenerys Targaryen", age: 18}, 
                    {name: "Jorah Mormont", age: 28}];

    function test1(array){
        let count = 0;
        if (array.age >= 30)
        count++;

        return count;
    }

let result = gameOfThrone1.filter(test1)

console.log(result.length);

/* Task - 7 (Not required)
    Створіть функцію , яка отримує масив об'єктів
    наприклад, [{name: "John Snow", age: 45}, {name: "Cersei Lannister", age: 32}, {name: "Daenerys Targaryen", age: 18}, {name: "Jorah Mormont", age: 28}]]
    і повертає новий масив усіх людей, старших за 30 років
*/

let gameOfThrone = [{name: "John Snow", age: 45}, 
                    {name: "Cersei Lannister", age: 32}, 
                    {name: "Daenerys Targaryen", age: 18}, 
                    {name: "Jorah Mormont", age: 28}];

function getPersonByAgeOver30(arr){
    let person = new Array;    
    for(let i = 0; i < arr.length; i++){
        for(let key in arr[i]){
            if(key === 'age' && arr[i][key] >= 30 ){
                person.push(arr[i].name);
            }
        }
    }
    return person;
}

console.log(getPersonByAgeOver30(gameOfThrone));


/* Task - 8 (Not required)

    Створіть функцію, яка буде приймати масив об'єктів
    наприклад, [{ім'я: "Jane", вік: 45}, {ім'я: "Peter", вік: 18}].
    та поверне новий масив об'єктів, що містить додаткову властивість "state"
    state = "baby", якщо вік дорівнює 0 або 3,
    state = "preschooler", якщо вік від 4 до 5,
    state = "teenager", якщо вік від 13 до 18 років

 https://www.w3schools.com/jsref/jsref_map.asp
*/

let person = [{name: "Jhon", age: 0},
              {name: "Annie", age: 2},
              {name: "Tamara", age: 3},
              {name: "Jane", age: 4}, 
              {name: "Peter", age: 5},
              {name: "Henry", age: 12},
              {name: "Ditmir", age: 13},
              {name: "Ditrich", age: 15},
              {name: "Alex", age: 18},
              {name: "Lev", age: 20}]

function addItemState(arr){
    let person = new Array;
    
    
    for(let i = 0; i < arr.length; i++){
        person[i] = arr[i];
        for(let key in arr[i]){
            if(key === 'age' && person[i][key] >= 0 && person[i][key] <= 3){
                person[i].state = "baby";

            } else if (person[i][key] >= 4 && person[i][key] <= 5){
                person[i].state = "preschooler";

            }else if (person[i][key] >= 13 && person[i][key] <= 18){
                person[i].state = "teenager";

            }else{
                person[i].state = "Something else";

            }

        }
    }
    return person;

}

console.log(addItemState(person));

/* Task - 9 (Not required)

    Створити функцію для знаходження індексу мінімального елементу масиву;
    наприклад,  console.log(minItem([6,8,2,9,1,3])) // 4
*/

function minItem(arr){
    let index = 0, min = arr[0];
    for(let i = 1; i < arr.length - 1; i++){
        if(min > arr[i]){
            min = arr[i];
            index = i;
        }
    }
    return index;
}
console.log(minItem([6,8,2,9,1,3]));


/* Task - 10 (Not required)

   Створити функцію, яка поверне кількість допустимих (НЕ not null/undefined) значень масиву
*/

//Переделать
function validate(arr){
    let countNull = 0, countUndefined = 0, valid = new Object;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === null){
            countNull++;
        }
        if(arr[i] === undefined){
            countUndefined++;
        }
    }
    valid.null = countNull;
    valid.undefined = countUndefined;
    return valid;
}

console.log(validate([5,4,"test", "", 0, null, undefined,45,23,645,75,123,'wefwef','werwer','werwerwer',undefined]));

/* Task - 11 (Not required)

   Створити функцію, яка відфільтрує нульові та невизначені значення
  якщо кількість невірних записів більше 3 - потрібно згенерувати помилку "Дані потрібно переглянути"
*/

function validate(arr){
    let count = 0, array = new Array;

    for(let i = 0; i < arr.length; i++){
        array[i] = arr[i];
    }

    for(let i = 0; i< array.length; i++){
        
        if(array[i] === null){ 
            count++;
            array.splice(i,1);
        }
        if(array[i] === undefined){
            count++;
            array.splice(i,1);
        }

        if (count == 3){
            return "Дані потрібно переглянути"
        }
    }
    return array;
}


let test = [5,4,"test", "", 0, null,45,23,645,75,123,null,'wefwef','werwer','werwerwer',undefined];
console.log(validate(test));
console.log(test);
