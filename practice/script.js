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



// iiiiiihhyyyyyyyyyy
// function whoIsPaying(name){
//     let names = name !== '' && name.length > 1  ? name.split(' ').concat(name.slice(0,2).split(' '))  : ''
//     let str = name.length == 1 ? name.split(''): names
//     let string = name == '' ? name.split(' ') : str
//     return string
//   } 
// console.log(whoIsPaying(''))


// ?

// function createPhoneNumber(numbers){
//     let res = `${'('}${numbers.slice(0,3)}${')'}`
//     return res.replaceAll(',','') + " ".concat(numbers.slice(3,6).join('')) + '-'.concat(numbers.slice(6).join(''))
// }
// console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,7]));

// lkns
// function longestConsec(strarr, k) {
//     if(k=== 1){
//         return strarr[strarr.length -1]
//     } else if(k === 2){
//         return strarr[1].concat(strarr[2])
//     } else if(strarr === '' && k === 3){
//         return strarr = ''
//     }
//     else if(k === 0 || k === 15){
//         return strarr =  ['']
//     }
//     else if(k === 3){
//         return strarr[strarr.length -3].concat(strarr[strarr.length - 2]).concat(strarr[strarr.length - 1])
//     }
//     return false
// }
// console.log(longestConsec(['blk','nrs','slt','alb'],0));



// ?
// let alphabet = [{
//     1 : "a",
//     2: "b",
//     3: "c",
//     4: "d",
//     5: "e",
//     6: "f",
//     7: "g",
//     8: "h",
//     9: "i",
//     10: "j",
//     11: "k",
//     12: "l",
//     13: "m",
//     14: "n",
//     15: "o",
//     16: "p",
//     17: "q",
//     18: "r",
//     19: "s",
//     20: "t",
//     21: "u",
//     22: "v",
//     23: "w",
//     24: "x",
//     25: "y",
//     26: "z",
// }];
// function high(x){
//     //    let alphabet = x.map((el)=> {
//         //    return x
//     //    })
//     let key = x.map((el)=> {
//         return el
//     })
//     return key
// }
// console.log(high('zero one two three four five'));



// let index = 0
// let text = 'Begimay'

// while(index < text.length){
//     console.log(text.charAt(index));
//     index++
// }



// ?
// function smallEnough(a, limit){
//     let res = a == limit
//     // let result = res.reduce((el,acc)=> el.a < acc.limit ? true : false)
//     return limit > a ? 'ooba' : 'jok ai'
//     // .Number(a) + Number(limit)
//     // return a.map((el)=> el.length)  > limit.toString() ? true : false
// }
// console.log(smallEnough([68, 101], 2000));


// var findAverage = function (nums) {
//     return nums.reduce((acc,el) => acc + el)/ nums.length
//   }
//   console.log(findAverage([1, 3, 5, 7]), 4);


function count(string) {
    return string
  }
  console.log(count('aba'));

// let resFunc = (str)=> {
//     return str.filter((el)=> Number(el))
// }
// console.log(resFunc(['text', 3, 7, 'github', 13, 'dev']));

// function userName(str){
//     return str.split('').map((el)=> el + el).join('')
// }
// console.log(userName('BegImayka'));