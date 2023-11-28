
// jenil metoddor
// 1.unshift() -> massivdin bashyna koshot
// shift-> birinchi elementti ozuno tartyp alat
// push()-> en artyna el koshup koet -> kop koldonulat
// pop()-> en artyndagy el alyp koet
// console.log(arr.slice(start,end)) -> kop koldonulat
// arr.splice(start,deleteCount,items) -> splice-> 3parametr alat -> start-> kaisy elementten bashtap jazabyz,deleteCount udalit kylat,items massivdin bashyna koshot,kancha bolso da koshup kete beret
// split- strokanyn metody,massiv kaitarat.split('')-> ar bir tamgasyn massiv kylyp kaitarat -> tolko strokany
// join -> massivdi strokaga ailandyrat.tolko massivge gana koldonulat.kop-> join('/') el arasyna koshup koet
// reverse-> obryatnyi poryadkaga jaigashtyryp koet. ailandyryp koet.

// let str = 'motion'
// console.log(str.split(''));
// console.log(str.split('').reverse().join(''));

// let arr = ['motion', 'academy']
// arr.splice(1,0,'web')
// arr.splice(3,0,2023)
// console.log(arr);

// ?

// const myFn = ()=> 5>6 ? 'chon' : 'kichine'




// HW 1
// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.
// let num = +prompt('San jaz')
// let myNum = num => num == 10? 'Верно' : 'Неверно'
// alert(myNum(num))

// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
// let a = 3
// let myFunc = (a)=> {
//     if(a > 0){
//         return 'positive'
//     } else if(a == 0){
//         return 'равно'
//     } else if(a < 0){
//         return "negative"
//     }
//        return 'error'
// }
// console.log(myFunc(a));

// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".
// function MyFunc(n){
//     if(n % 2){
//         return 'Нечетное число'
//     }else if(n% 2 == 0){
//         return "Четное число"
//     } return 'err'
// }
// const MyFunc = (n) => n % 2 == 0 ? 'Нечетное число' : "Четное число"
// console.log(MyFunc(22));


// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".

// const myFunc2 = num => num % 2 == 0 ?"Четное число" : "Нечетное число"
// console.log(myFunc2(23));


// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".

// let s = 78
// const typeFunc = (s)=> {
//     if(typeof s === 'string'){
//         return 'string'
//     } else if(typeof s === 'number'){
//         return 'number'
//     }else if(typeof s === 'boolean'){
//         return 'boolean'
//     } return 'error'
// } 
// console.log(typeFunc(s));


// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// let a = +prompt('San jaz')
// const numFn = num => num >1 && num < 9 ? 'Верно' : 'Неверно' 
// console.log(numFn(a));

// 8. Вам дана переменная а. Если переменная a равна
// трем или равна семи, то прибавьте к ней 7, иначе поделите
// ее на 10. Выведите новое значение переменной в консоль.

// let a = +prompt('San jaz')
// const arrFunc = num => num == 3 || num == 7 ?  num + 7 : num / 10
// console.log(arrFunc(a));

// 9. Вам даны переменные а , b. Если переменная a равна
// или меньше 0, а переменная b больше или равна 5, то
// выведите сумму этих переменных, иначе выведите их разность (результат вычитания).
// let a;
// let b;
// const numFn = (a,b)=> a <= 0 && b >= 5 ? a + b : a-b
// console.log(numFn(0,5));


// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.
// let a;
// let b;
// const myFn = (a,b) => a>4 && a<10 || b >= 7 && b<17 ? 'Верно' : 'Неверно'
// console.log(myFn(9,10));


// HW 2
//  1  Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
// let arr = ['a','b','c']
// let res = arr.concat(1,2,3)
// console.log(res);

//2 Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе.
// let arr = [1,2,3]
// let arr2 = [4,5,6]
// console.log(arr.concat(arr2));

//3 Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
// let arr = [1,2,3]
// console.log(arr.concat(4,5,6));

//4 Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
// let arr = [1,2,3]
// arr.unshift(4,5,6)
// console.log(arr)

//5 Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
// let str = ['js','css','jq']
// console.log(str[0]);
// console.log(str.slice(0,1).join());
// console.log(str.shift());

//6 Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
// let str = ['js','css','jq']
// console.log(str[str.length-1]);
// console.log(str.slice(str.length-1).join());
// console.log(str.pop());

//7  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].
// let arr = [1,2,3,4,5]
// console.log(arr.slice(0,3));

//8  Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5].
// let arr5 = [1,2,3,4,5]
// console.log(arr5.slice(3));

//9  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
// let arr = [1,2,3,4,5]
// arr.splice(1,3,4)
// console.log(arr);

//10  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
// let arr = [1,2,3,4,5]
// arr.splice(0,1)
// arr.splice(3)
// console.log(arr);