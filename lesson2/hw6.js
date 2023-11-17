/* Task - 1 (Not required)
    Написати свою реалізацію функції isNaN. 
    
    Нагадування: це глобальна функція в JavaScript, яка використовується для перевірки, чи є значення NaN (Not-a-Number). 
*/


function isNaN1(value){
    if(Number(value) + 1){
        return false;
    }else{
        return true;
    }

}


console.log(isNaN1(-0)); // 
console.log(isNaN1(0));
console.log(isNaN1(NaN)); // The same
console.log(isNaN1(undefined)); // Дає true, оскільки undefined може бути перетворений в NaN
console.log(isNaN1("qwerty")); // Дає true, оскільки string є числом NaN
console.log(isNaN1(20)); // Дає false, оскільки number не є NaN
console.log(isNaN1("20")); // Дає false, оскільки number не є NaN
console.log(isNaN1(null)); // Дає false, оскільки number не є NaN


/* Task - 2
    Перевірка теорії ймовірності. Напишіть функцію яка буде генерувати певну кількість випадкових чисел в діапазоні 
    від 100 до 1000 включно. Порахувати кількість парних та непарних серед них. 
    Обчислити відсоткове співвідношення - чи буде воно близьке до 50%50? Приклад функції checkProbabilityTheory(count). 
    Парметр count буде вказувати скільки разів буде генеруватися випадкове число.

    Функція виводить інформацію
    Кількість згенерованих чисел: кількість чисел
    Парних чисел: кількість парних чисел
    Не парних чисел: кількість не парних чисел
    Відсоток парних до не парних
*/

function checkProbabilityTheory(count){
    let rand=0, pair=0, nonPair=0, min = 100, max = 1000;
    for(let i = 0 ; i < count; i++){
            rand = Math.floor(Math.random() * (max - min + 1)) + min;  
            if (rand % 2 == 0){
                pair++;
            }else {
                nonPair++;
            }   
    } 
    return "Кількість згенерованих чисел: " + count + '\n' + "Парних чисел: " + pair + '\n' + "Не парних чисел: " + nonPair + '\n' + "Відсоток парних та не парних " + pair/count*100 + "%/" + nonPair/count*100 + "%";

}

console.log(checkProbabilityTheory(10000000));

/* Task - 3
    Необхідно написати власну реалізацію функцій padEnd та padStart, але у вас повинна бути одна функція pad(‘qwerty’, ‘+’, true), яка приймає чотири аргументи:

    рядок, до якого буде додаватися символ.
    символ, який буде додаватися.
    Скільки додавати символів
    булеве значення, яке вказує, куди додавати символ. Якщо true, то до початку, якщо false, то в кінець.
    Останній аргумент повинен працювати як і в оригінальній функції, а саме якщо наш рядок з 5 символів, а ви вказуєте знаачення 6, то додаєте тільки один символ
*/

function pad(line, symbol, quantity, startOrEnd){
    let symbolIn= "";

    if (line.length == quantity){
        return line;
    }

    if (startOrEnd == true){
        for (let i = 0; i < quantity - line.length; i++ ){
            symbolIn += symbol;
        }
        return symbolIn + line;
    }else {
        for (let i = 0; i < quantity - line.length; i++ ){
            symbolIn += symbol;
        }
        return line + symbolIn;
    }
}

console.log(pad("test", "*", 4, true));
console.log(pad("test", "*", 1, false));
console.log(pad("test", "*", 5, true));
console.log(pad("test", "*", 5, false));
console.log(pad("test", "*", 8, true));
console.log(pad("test", "*", 6, false));