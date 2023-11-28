// filter//map//find
// filter-> massivdiki,bashkalarga ishtebeyt.-> tolko true el kaitarat-> jany masssiv kaitarat
// map-> ar bir elementti ozgortkongo jardam beret,kancha el bersek,oshoncho el kaitarat
// find-> ozuno kerektuu birinchi el tapkandan kiyin toktotup koet.jany Massiv kaitarbayt.tibine karap chygaryp beret
// bir strokaga jazylgan kod -> kuchtuu programmisttin ishi
//  == -> tipterin karabayt 


// let arr = ['motion', 123,'web',false]
// console.log(arr.map((el,index,array)=> { //index-> ichindegi elementtin indexterin alyp beret -> map-> elementtin ar birine ishtep chygat
//     return el
// }));

// let num = [2,3,4,6,5]
// console.log(num.map((el)=> {
//     return el % 2 === 0 
// }));

// console.log(num.filter((el,index)=> {
//     return el > 5 
// }));

// let arr = ['motion', 'web','acad', 'IT']
// console.log(arr.filter((el,index)=> {
//     return el.includes('web')
// }).map((el)=> {
//     return el.toUpperCase()
// }));

// function test(a,b){
//     let res = +b.join()
//     return a.filter((el)=> {
//         return el !== res
//     })
// }
// console.log(test([1,3,4,5],[5]));

// function test (a,b){
//     let besh = +b.filter((el)=> {
//         return el === 5
//     }).join('')
//     let uch = +b.filter((el)=> {
//         return el === 3
//     }).join('')
//     return a.filter((el)=> {
//         return el !== besh && el !== uch
//     })
// }
// console.log(test([34,54,64],[5,3]));


// let arr = ['motion','web','ava']
// console.log(arr.find(el=> {
//     return el.length < 4
// }));

// let user = 'Nurtilek Abibillaev'

// console.log(user.split(' ').map(el=> {
//     return el[el.length - 1]
// }).join('.'));

// var lastLetter = 'Nurtilekf Abibillaever'
// console.log(lastLetter.split(' ').map(el => {
//     return el[el.length - 1]
// }).join('.')
// )

// let num = ['lfjv','jfl', 'ljafhj']
// console.log(num.join(' '));

// codeWares
//  ?
// const arr = ['lowerCase']
// console.log(arr.join('').split('').reverse().join(''));


// let num = [1,6,3,5,9,0]
// console.log(num.sort());


// ?
// let usdj = ['1,43,76,4']
// usdj.join('')
// console.log(usdj.join());

// const flip =(d,a)=> {
//     return d === 'R' ? a.sort((a,b)=> a - b) : a.sort((a,b)=> b - a)
// }
// console.log(flip('L',[3,4,5,2,67,1]));


//   function position(letter){
//     let alphabet = [
//         "a",
//         "b",
//         "c",
//         "d",
//         "e",
//         "f",
//         "g",
//         "h",
//         "i",
//         "j",
//         "k",
//         "l",
//         "m",
//         "n",
//         "o",
//         "p",
//         "q",
//         "r",
//         "s",
//         "t",
//         "u",
//         "v",
//         "w",
//         "x",
//         "y",
//         "z",
//       ];
//       let filterNumber = alphabet.map((el,index)=> {
//           return el === letter ? index + 1 : el
//       }).filter((elem)=> {
//           return +elem
//       }).join()
//       return `Position of alphabet: ${filterNumber}`
//   }
//   console.log(position('a'));


// function friend(friends){
//      return friends.filter((el)=> {
//         return el.length === 4
//     })
//   }
//   console.log(friend(['Alinur','KAJFdj','jngl']));

// const friend = friends => friends.filter((el)=> return el === 4) ?


// function shortcut(string){
//     return string.replace(/[aeiou]/g,'') // g-> globaldy koldonush uchun// arasyna jazylat
// }
// console.log(shortcut('hello'));


// function whoIsPaying(name){
//     let sliceName = name.slice(0,2)
//     let result = name.split().concat(sliceName)
//     return name.length > 2 ? result : [name]
//   }
//   console.log(whoIsPaying('Meet'));


// function makeUpperCase(str) {
//     return str == ''? '' : str.toUpperCase()
    
//   }
//   console.log(makeUpperCase('hellh'));

// function reverseWord(str){
//     return str.split(' ').map((el)=> {
//         return el.split('').reverse().join("")
//     }).join(" ")
// }
// console.log(reverseWord());

// function generateHashtag (str) {
//     let name = str.replace(' ', '').map((el)=> {
//         return el.toUpperCase()
//     })
//     return name == '' ? false : '#' + name 
// }
// console.log(generateHashtag('hello World'));


// let myFunc = (str)=> {
//     return str.split(' ').map((el)=> {
//         return el.split('').reverse().join('')
//     }).join()
// }
// console.log(myFunc('The quick brown'));

// const flip=(d, a)=>{
//     return d == 'R' ?  a.sort((a,b)=> a - b): a.sort((a,b)=> b - a)
//   }
//   console.log(flip('L', [3,12, 2,5, 1, 2]));

// ?
//   function sumCubes(n){
//     //   let sum = 0
//       return n.reduce((accumulator, currentValue)=> {
//         return accumulator * currentValue
//       },0)
//   }
//   console.log(sumCubes(3));

// function arrayDiff(a, b) {
//   return a.filer((el)=> {
//       return el
//   })
// }
// console.log(arrayDiff([1,2,3,4],[3]));




function highAndLow(numbers){
    let num = Math.max(...numbers)
    let min = Math.min(...numbers)
    let res = `${min} ${num}`
    return res
  }
  console.log(highAndLow([9,2,-2,4,34,5,67,3,9]));




// console.log(Math.max(1,2,3,5,8));
// console.log(Math.min(-4,1,2,3,5,8));

