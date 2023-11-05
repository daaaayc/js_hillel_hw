/* Additional materials:
https://www.w3schools.com/js/js_type_conversion.asp
https://javascript.info/type-conversions
https://www.programiz.com/javascript/type-conversion
https://www.geeksforgeeks.org/javascript-type-conversion/
https://medium.com/@13__TOMMY/type-conversion-javascript-basics-a6c55e71cada
https://dev.to/alexanie_/javascript-type-conversions-1p3g
*/

//Вам необхідно вказати, яким буде результат операції та описати крок за кроком у вигляді коментарів, як відбувається перетворення в кожному прикладі:

console.log('number' + 3 + 3)  
//number33
//И за того что стоит + и первое значение строка все значения превились к строке после чего произошла конкатенация строк 
console.log(null + 3)
//3
//null преобразуется в 0, а 0 + 3 =3

console.log(5 && "qwerty")
//"qwerty"
//логическое "И" возвращает либо первое false либо последнее true значение.
//5 и "qwerty" оба являются true значением по этому вернулось "qwerty"

console.log(+'40' + +'2' + "hillel")
//"42hillel"
//+'40' + +'2' в этом выражении перед числами стоят + что является преобразованием в число поэтому это выражение вернет нам сумму двух чисел
// + "hillel" дальше происходит простая конкатенация строк

console.log('10' - 5 === 6)
//false
//Строка 10 преобразовывается с число 10 - 5 = 5, а 5 не равно 6

console.log(true + false)
//1
//True преобразовывается в 1, а false в 0

console.log('4px' - 3)
//NaN
//При попытке преобразовать в число выражение '4px' происходит ошибка и возвражается NaN, а NaN - 3 = NaN 

console.log('4' - 3)
//1
//4 спокойно преобразуется в число

console.log('6' + 3 ** 0)
//61
//первым просходит возведение 3 в степень 0 что дает нам 1, 
//потом для конкатенации 1 преобразуется к строке и происходит конкатенация

console.log(12 / '6')
//2
//преобразование 6 в число

console.log('10' + (5 === 6))
//10false
//первым происходит действие в скобках 5 не равно 6 поэтому false
//вторым конкатенация строк

console.log(null == '')
//false
//специальное правило языка null нестрого равно только undefined и не равно никакому другому

console.log(3 ** (9 / 3))
//27
//первым действие в скобках
//вторым возведение в степень

console.log(!!'false' == !!'true')
//true
//если мы перобразуем 'false' и 'true' в boolean то получит true
//первый ! знак преобразует значение в boolean инвертирует его а второй ! еще раз инвертирует значение

console.log(0 || '0' && 1)
//1
//'0' преобразуется в true
// сперва выполнится '0' && 1 что вернет нам 1(последнее true)
//потом выполнится логическое или которое вернет первое true

console.log((+null == false) < 1)
//false
//+null = 0
// +null == false возвращает true
//1 < 1  = false

console.log(false && true || true)
//true
//false && true вернет первое false
//следующее значение вернет true(первое true)

console.log(false && (false || true))
//false
//первым выполнится действие в скобках (false || true) и вернет нам true
//вторым выполнится && и вернет false

console.log((+null == false) < 1 ** 5)
//false
//первым выполнится (+null == false) что вернет нам true(+null = 0, false = 0)
//1 в любой степени будет 1
//а выраженией 1 < 1 ложно

