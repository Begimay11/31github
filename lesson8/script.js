// reduse -> massivdin metodu,birok massiv kaitarbayt ->


// let arr  = ['Abibillaev', 'Nurtilek']
// console.log(arr.reduce((acc,el)=> {
//     return el[0] + acc.slice(1) + ' ' + acc[0] + el.slice(1)
// }));


// console.log(arr.reduce((el,acc)=> {
//     return el[el.length - 1] + ' ' + acc[acc.length -1]
// }));

// console.log(arr.reduce((el,acc)=> {
//     return el.slice(0,el.length - 1) + acc[acc.length - 1] + " " + acc.slice(0,acc.length - 1) +  el[el.length - 1]
// }));


// function highAndLow(numbers){
//     return `${Math.min(...numbers.split(' ').map(el => +el))} ${Math.max(...numbers.split(' ').map(el => +el))}` 
//   }
//   console.log(highAndLow('2 3 4 9 78 56 230 -123'));


// function reverseWords(str) {
//     return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
//   }
//   console.log(reverseWords('double  spaces'));



// function correctPolishLetters (string) {
//     return string.split('').map((el)=> {
//         if(el === 'ą'){
//             return 'a'
//         } else if(el === 'ć'){
//             return 'c'
//         }else if(el === 'ę'){
//             return 'e'
//         }else if(el === 'ł'){
//             return 'l'
//         }else if(el === 'ń'){
//             return 'n'
//         }else if(el === 'ó'){
//             return 'o'
//         } else if(el === 'ś'){
//             return 's'
//         }else if(el === 'ź' || el === 'ż'){
//             return 'z'
//         } return el
//     }).join('')
//   }
// console.log(correctPolishLetters('Lech Wałęsa'));


// function generateHashtag(str) {
//   let result = str
//     .split(" ")
//     .filter((elem) => {
//       return elem !== "" && elem !== " ";
//     })
//     .map((el) => {
//       return el[0].toUpperCase() + el.slice(1);
//     })
//     .join("");
//   return str ? (result.length < 140 ? "#" + result : false) : false;
// }
// console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work");
// console.log('Codewars is nice');

// ishtegeni
// function generateHashtag(str) {
//   let result = str
//     .split(" ")
//     .filter((elem) => {
//       return elem !== "" && elem !== " ";
//     })
//     .map((el) => {
//       return el !== " " ? el[0].toUpperCase() + el.slice(1) : false;
//     })
//     .join("");
//   let hashtag = "#" + result;
//   return str && result && result.length < 140 ? hashtag : false;
// }
// console.log();


// function lessFn(str){
//     return str.split(' ').map((el)=> {
//         return el.split('').reverse().join('')
//     }).join(' ')
// }
// console.log(lessFn('I am Begimay.I love flowers'));


// HW
// task 1
// let num = [5,15,315,2,13,20,9]
// console.log(num.reduce((acc,el)=>  acc + el
// ,0));

// task 2
// let num = [5,12,314,2,13,20,9,20,9]
// let res = num.filter( el =>  el % 2 === 0 ? el : false)
// .reduce((acc,elem)=> acc + elem)
// console.log(res);


// task 3
// let num = [5,15,315,2,13,20,9]
// let res = num.filter((el)=> el> 10 ? el : null)
// .reduce((acc,el)=> acc + el)
// console.log(res);

// task 4
// let num = [3,13,54,15,335,58, 39]
// let res = num.filter((el)=> el > 10 ? el : null)
// .sort((a,b)=> b - a)
// .reduce((el,acc)=> el - acc)
// console.log(res);

// task 5
// let user = ['Аскар', 'Баяман', 'Калмамат']
// let result = user.join('').length
// console.log(`uzundugu: ${result}`);

// task 6
// let user = ['Аскар', 'Баяман', 'Калмамат']
// let users = user.map((el)=> el.toUpperCase()).join(' ')
// console.log(users);

// task 7
// let user = ['Аскар', 'Баяман', 'Калмамат']
// let users = user.map((el)=> {
//     return el[0].toLowerCase() + el[1].toUpperCase() + el.slice(2)
// }).join(' ')

// console.log(users);

// task 8
// const isPresent = (str, target) =>  str.includes(target) ? true : false
// console.log(isPresent('jvhbvhg', 'j'))

// task 9
// let user = ['асКар', 'бЯяман', 'калМмамат']
// let users = user.map((el)=> {
//     return el[0].toUpperCase() + el.slice(1).toLowerCase()
// })
// console.log(users);

// task 10
// let name = ['Баяман', 'Калмамат']
// let user = name.reduce((acc,el)=> el[0] + acc.slice(1) + ' ' + acc[0] + el.slice(1))
// console.log(user);

// task 11
// let type = [true, '1234',325]
// console.log(type.reduce((acc,el)=> typeof acc === typeof el ? true : false));

// task 12
let usereas;

// task 13
// let num = [5, -3, 13, -7, 45]
// let res = num.filter((el)=>  el > 0).reduce((acc,el)=> acc + el)
// console.log(res);

// task 14
// let num = [5, -54, 13, -7, 45, -15, -34,]
// let numbers = num.filter((el)=> -el > 10).reduce((el,acc)=> el + acc)
// console.log(numbers);

// task 15
// let money = [1, 65, 13 , 30, 100,200,500] 
// let meonys = money.map((el)=>`${el}$ = ${el * 89}сом` ).join(' ') 
// console.log(meonys)

// task 16
let lorem = ['Lorem ipsum dor sit omet devour il ela sit']
let res = lorem.map((el,index)=> {
    return  index +1
})
console.log(res);
// console.log(lorem.reduce((el,idn) =>  idn));

// task 17
let name = ['Оскар', 'Баяман', 'Калмамат']
let user = name.filter((el,index)=> {
    return el + index + 1;
})
console.log(user);

// task 18
// let num = [2,456,9,6,8]
// let number = num.filter((el)=> el % 2 === 0 ? el : false)
// .reduce((acc,elem)=> acc + '-' + elem) 
// console.log(number);

// task 20
let num = [5,15,315,2,13,20,9]
let number = num.reduce((acc,el)=> acc + el % num.length)
console.log(number);

// 379 chyksa 54





// var fruits = ["apple", "banana", "grapes", "mango", "orange"];

// function filterItems(query) {
//     return fruits.filter(function (el) {
//       return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//     });
//   }
//   console.log(filterItems('ge'));
  