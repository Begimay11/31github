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

let numb = ['13 24 53 -9']
const numFn = (...num)=> {
    if(num > 0){
        return num.length
    }  
    return null
}
console.log(+numb > 0 ? +numb : false);
console.log(numFn(numb));