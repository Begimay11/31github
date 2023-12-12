// for(nachalo;uslovie; shag){
    // deis
// }


// nachalo
// while(usl){
    // deis
    // shag
// }

// do while
// nachalo
// do{
    // deis
    // shag
// } while(usl)


// let num = 1
// while(num <= 10){
//     console.log(num);
//     num++
// }

// let i = 1
// do{
//     console.log(i);
//     i++
// }while(i <= 10)



// for of
// let 



// for in -> objecttin keylerine kairylyp, alyp beret,massiv bolso indexterin alyp beret


// function Symbol(s1,s2){
//     let res = ''

//     for(let i = 0; i <= s1.length - 1; i++){
//         s1[i] === s2[i] ? res += s1[i] : res += 0
//     }
//     return res
// }
// console.log(Symbol('+-+-','+--+'));




// HW 
// task 1
// let i = 1
// while(i <= 50){
//     console.log(i);
//     i++
// }

// for(let i = 1; i <= 50; i++){
//     console.log(i);
// }

// task 2
// let res = []
// for(let i = 0; i <= 10; i++){
//     res = res += 'X'
// }
// console.log(res);

// let i = ''
// let res = []
// while(i <= 10){
//     res = res += 'X'
//     console.log(res);
//     i++
// }

// task 3
let arr = [5, 3,4, 1, 9,2, 7]

// for(i of arr){
//     console.log(i);
// }

// for(i in arr){
//     console.log(i);
// }

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// let i = 0
// while(i < arr.length){
//     console.log(arr[i]);
//     i++
// }

// task 4
let num = [5, 2, 1, 2]
let res = 1

//  for(let i = 0; i < num.length; i++){
//     res *= num[i]
//  }
//  console.log(res);

// let i = 0
// while(i < num.length){
//     res *= num[i]
//     i++
// }
// console.log(res);

// for(i of num){
//     res *= num[i]
//     i++
// }
// console.log(i);

// let user = {
//     name: 'Begimay',
//     age: 13,
//     hobby: 'swim',
//     less: 'JS'

// }
// let counter = 0
// // console.log(Object.entries(user))

//   for(let key in user){
//         counter++
//       console.log(user[key]);
    // console.log(`'Key:' ${key},  'values:' ${user[key]}`)
//   }
//   alert('Jalpy element:' + counter)



let menu = {
    one: 'apple',
    two: 'banana',
    three: 'kiwi',
    four: 'grapeFruit',
}
// console.log(menu);
console.log(Object.keys(menu).length);
console.log(Object.values(menu).length);

// let count = 0
// for(let key in menu){
//     count++
//     alert(menu[key])
// }
// alert('Jalpy elementterdin sany: ' + count)
  
for(let key of menu){
    console.log(key);
}









// var menu = {
//     width: 300,
//     height: 200,
//     title: "Menu"
//   };
  
//   for (var key in menu) {
//     // этот код будет вызван для каждого свойства объекта
//     // ..и выведет имя свойства и его значение
  
//     alert( "Ключ: " + key + " значение: " + menu[key] );
//   }
  


// zamykanie -> functiondun ichinde function achhyp any oshol ele functiondun ichinde ishtetkenibiz








// task 15
// // let num = [5, 3, 1, 2, 7]
// let sum = 0
// for(let i = 0; i < num.length; i++){
//     sum += num[i]**2
// }
// console.log(sum);

// task 18
// let num = 0
// for(let i = 0; i < 1000; i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         num += i
//     }
// }
// console.log(num);


// task 20
// let user = 'jzvzszrzpz'
// console.log(user.split('').map((el,idn)=> idn % 2 !== 0 ? el.toUpperCase() : el).join(''));


