// && jana -> false
// || je -> true -> birinchi truenu tapkanda operation toktoit,
//index -> []
// %
// ? : -> ternarnyi operator

// false,0, '',undefined

// console.log();


// let num = 3
// if(num> 4){ // iftin ichi true bolgondo gana ishteyt.
// console.log(num + 5);
// } else { // true emes bolso,else ishteyt
//     console.log('tuura emes');
// }

// let str = 'Motion'
// if(str.includes('i')){
//     console.log(str + 'web');
// } else{
//     console.log(str);
// }

// if(str.length >= 6){
//     console.log(str.toUpperCase());
// }else {
//     console.log(str);
// }

// let user = 'motionWeb'
// console.log(user[0].toUpperCase() + user.slice(1));
// console.log(user[user.length - 1]); //en akyrky tamgasyn chygaryp beret.


// let str = 'academy'
// if(str[0] === 'a' || str[0] === 'b'){
//     console.log(str.toUpperCase());
// } else{
//     console.log(str);
// }

// if,else bir gana jolu koldonulat,else if -> kaalashybyzcha koldonup kete berebiz

// let num = 16
// if(num > 0){
//     console.log('Positive');
// } else if(num === 0){
//     console.log('Barabar');
// } else if(num >= 15){
//     console.log('WAaayy');
// } else{
//     console.log('Negative');
// }

// let num = 4
// if(num % 2 === 0){
//     console.log('jup');
// } else{
//     console.log('tak');
// }

// let str = 'motion'
// console.log(str.length > 5 ? str + 'web' : str + 'academy');

// let str = 'Motion'

// console.log(str.includes('k') ? str.replaceAll('o', 'a') : str[0]);

// let age = 30

// if(age >= 5 && age < 15){
//     console.log('Kitep oku');
// } else if(age >= 20 && age < 50){
//     console.log('ishte');
// } else{
//     console.log('Multik kor');
// }

// HW
// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.
// let a = 10
// if(a == 10){
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }


// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.

// let a = -2
// if(a > 0){
//     console.log('Positive');
// } else if(a === 0){
//     console.log('Barabar');
// } else{
//     console.log('Negative');
// }

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".

// let number = 45
// if(number % 2 === 0){
//     console.log("Четное число");
// }else{
//     console.log("Нечетное число");
// }

// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".

// let a = 10;
// let b = 2;
// console.log(a % b === 0 ? "Нечетное число" : "Четное число");

// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".

// let s = 8;
// if(typeof s === "boolean"){
//     console.log( "boolean") ;
// } else if(typeof s === "number"){
//     console.log('number');
// } else{
//     console.log('string');
// }

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// let a = 5
// console.log(a > 1 && a<9 ?'Верно' : 'Неверно' );

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.

// let a = 11
// if(a === 3 || a === 7){
//     console.log(a + 7);
// } else{
//     console.log(a / 10);
// }

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).

// let a = 3
// let b = 5
// if(a <= 0 && b >=5){
//     console.log(a + b);
// }else{
//     console.log(a - b);
// }

// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.

// let a = 9
// let b = 7
// if(a > 4 && a < 10 || b >= 7 && b < 17){
// console.log('Верно');
// } else{
//     console.log('Неверно');
// }