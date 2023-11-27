/*  Task - 1
    Напишіть регулярний вираз, який допоможе знайти принаймні шість символів і не містяти літери А (великої або малої)
*/
text = 'sthsetArfwapglertyh ;oi[omcvawe';
var re = /[B-Zb-z0-9_ ]{6,}/;
console.log(text.match(re));


/*  Task - 2

    var text = 'cat car can';

    Напишіть regex, котрий знайде cat та can, але не знайде car
 
*/

var text = 'cat car can';
var re = /(cat|can)/;
console.log(text + ': ' + text.search(re));


/*  Task - 3

    text = 'I would like 8 cups of coffee, please.';

    Напишіть regex, котрий знайде кількість чашок кофе.
 
*/
text = 'I would like 1855 cups of coffee, please.';
var re = /\d{1,} cups/;
console.log(text + ': ' + text.search(re));


/*  Task - 4

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова котрі починаются на h
 
*/

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var re = /\bh\w+/;
console.log(text.match(re));


/*  Task - 5 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова від 4 до 6 символів
 
*/

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var re = /\b[A-Za-z]{4,6}/;
console.log(text.match(re));


/*  Task - 6 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова більше ніж 5 символів
 
*/

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var re = /\b[A-Za-z]{5,}/;
console.log(text.match(re));

/*  Task - 7 (Not required)

    var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';


    Напишіть regex, котрий знайде ВСІ слова довжина котрих 6 смиволів
 
*/

var text = 'Hello people of 1974. I come from the future. In 2014 we have laser guns, hover boards and live on the moon!';
var re = /\b[A-Za-z]{6}/;
console.log(text.match(re));

/*  Task - 8. Paranoya (Not required)
    В нас є масив обєктів в яких міститься email.

    var arr = [
        {
            userName:"Test",
            lastName:"Test",
            email:"test.test@gmail.com"
        },
        {
            userName:"Dmitro",
            lastName:"Porohov",
            email:"dmitro.porohov@yahoo.com"
        },
        {
            userName:"Andrii",
            lastName:"",
            email:"andrii@mail.ru" // Нам такі не підходять
        },
    ];


    У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.

    За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @

    - одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.
*/


/*  Task - 9 (Not required)

    У нас є масив рядків, давайте знайдемо посилання.

    var strings = [
	'https://https://github.com/',
	'this is not a URL',
	'https://google.com/',
	'123461',
	'https://google.com/search?q=cats',
	'http://not a valid url',
	'abc http://invalid.url/'
];


*/

/* Task - 10  (Not required)

    Поміняйте місцями ім'я та прізвище

    var name = 'John Smith';

*/
