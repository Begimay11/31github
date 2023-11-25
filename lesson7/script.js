// filter//map//find
// filter-> massivdiki,bashkalarga ishtebeyt.-> tolko true el kaitarat-> jany masssiv kaitarat
// map-> ar bir elementti ozgortkongo jardam beret,kancha el bersek,oshoncho el kaitarat
// find-> ozuno kerektuu birinchi el tapkandan kiyin toktotup koet.jany Massiv kaitarbayt.tibine karap chygaryp beret
// bir strokaga jazylgan kod -> kuchtuu programmisttin ishi

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


