// filter-> massivdin metodu,

// Дана сторона квадрата a. Найти его периметр P = 4·a.
// let a = 4
// let p = 4 * a
// console.log(p);

// console.log(a** 2);

// 3
// let a = 4
// let b = 3
// let s = a * b
// let p = 2 *(a + b)
// console.log(s);
// console.log(p);

// let d = 12
// let o = 3.14
// let l = o * d
// console.log(l);

// // 5
// let a = 5
// // let v = a ***
// let s = 6 * a**2
// console.log(s);


// if
// let num = +prompt('san jaz')
// console.log(num > 0 ? num+ 1 : -num - 2);
// const myFn = (num)=> {
//     if(num > 0){
//         return num + 1
//     } else if(num === 0){
//         return 10
//     }else{
//         return num - 2
//     }
// }
// console.log(myFn(num));


// Даны три целых числа. Найти количество положительных чисел в исходном наборе.

// let num = [13,24,53,-9,23,-20,5]
// let res = num.filter((el)=> el > 0 ? el : false)
// console.log(res.length);



// let num = [40,50,-9,98,-30,-90,9]
// let res = num.filter((el)=> {
//     if(el > 0){
//         return el
//     }
// })
// let resOtr = num.filter((el) => el < 0 ? el : false)
// console.log(`положительных: ${res.length}  отрицательных ${resOtr.length}`);





// // ?
// let a = [12,32]
// let b = Math.max(...a)

// console.log(Math.min(...a));
// console.log(a.sort((a,b)=> a > b))

// console.log(Math.cbrt(9));
// let  num = [34,12,500,23,45]
// console.log(num.sort((a,b)=> b - a));

// let num = [12,43,65]
// console.log(`chonu -> ${Math.max(...num)}, kichinesi ->${Math.min(...num)}`);

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
// console.log(generateHashtag('               '));



// function myFn(str){
//     let name = str.split(' ').filter((el)=> el !== el.toUpperCase())
//     .map((el)=>el !== '' && el !== " " ?  el[0].toUpperCase()  + el.slice(1).toLowerCase() : false).join('')
//     return name !== '' && name !== ' '.replace(name.length) ? "#" + name : false  
// }
// console.log(myFn('    '))

// function myFn(str){
//     let name = str.split(' ').filter((el)=> el !== el.toUpperCase())
//     .map((el)=>el !== '' && el !== " " ?  el[0].toUpperCase()  + el.slice(1).toLowerCase() : false).join('')
//     if(name !== '' && name !== ' '.replace(name.length)){
//         return "#" + name
//     } return false
// }


// let num = [12,54,34]
// console.log(`${Math.max(...num)} ${Math.min(...num)}`);

function whoIsPaying(name){
    let names = name !== '' && name.length > 1 ? name + name.slice(0,2) : ''
    let str = name.length == 1 ? name.split('') : names
    return str.split()
  } 
console.log(whoIsPaying('Alani'));
