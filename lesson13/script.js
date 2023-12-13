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

// var codes = {
//     // телефонные коды в формате "код страны": "название"
//     "7": "Россия",
//     "38": "Украина",
//     "1": "США"
//   };
  
//   for (var code in codes) console.log( code ); 





// let array = [1,2,3,4,5,6,7,8]

// let name = {
//     one: 'Begimay',
//     two: 'Janylai',
//     three: 'Burulai',
//     four: 'Aitolkun',
//     five: 'Zhoomart'
// }

// // for(let key in array){
// //     console.log(key);
// // }
// for(let house in name){
//     // console.log(name[house]);
//     alert(`${name[house]} I love you`)
// }
// // console.log(name);
// console.log(Object.keys(name).length);
// console.log(Object.values(name));
// console.log(Object.entries(name));







//   var codes = {
//     "+7": "Россия",
//     "+38": "Украина",
//     "+1": "США"
//   };
  
//   for (var code in codes) {
//     var value = codes[code];
//     code = +code; // ..если нам нужно именно число, преобразуем: "+7" -> 7
  
//     alert( code + ": " + value ); // 7, 38, 1 во всех браузерах
//   }
// let menu = {
//     one: 'apple',
//     two: 'banana',
//     three: 'kiwi',
//     four: 'grapeFruit',
// }
// // console.log(menu);
// console.log(Object.keys(menu).length);
// console.log(Object.values(menu).length);

// let 

// let count = 0
// for(let key in menu){
//     count++
//     alert(menu[key])
// }
// alert('Jalpy elementterdin sany: ' + count)
  
// for(let key of menu){
//     console.log(key);
// }









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
// let arr = [5, 3,4, 1, 9,2, 7]

// for(i of arr){
//     console.log(i);
// }

// for(i in arr){
//     console.log(arr[i]);
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
// let num = [5, 2, 1, 2]
// let res = 1

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


// task 5
// for(let i = 0; i <= 100; i++){
//     i % 2 === 0 ? console.log(i): null
// }

// ?
// let i = 0
// while(i < 100){
//     i % 2 === 0 ? console.log(i) : null
//     i++
// }

// task 6
// let res = 0
//  for(let i = 0; i <= 100; i++){
//     res+= i
//  }
//  console.log(res);

// let i = 0;
// while(i <= 100){
//     res += i
//     i++
// }
// console.log(res);

// task 7
// let array = [2, 4, 5, 6, 8]
// let res = 0
// for(let i = 0; i< array.length; i++){
//     res+= array[i]
// }
// console.log(res);

// let i = 0
// while(i < array.length){
//     res += array[i]
//     i++
// }
// console.log(res);

// for(i in array){
//     res += array[i];
// }
// console.log(res);

// for(i of array){
//     res += i
// }
// console.log(res);

// task 8
// let arr = [3, 4, 6,12, 3, 5]

// for(let i = 1; i<= arr.length; i++){
//     i > 3 && i<10 ? console.log(i) : null
// }

// let i = 1
// while(i < arr.length){
//     i > 3 && i < 10 ? console.log(i) : null
//     i++
// }

// for(let key in arr){
//  arr[key] > 3 && arr[key] < 10 ? console.log(arr[key]) : null
// }

// for(let i of arr){
//     i > 3 && i<10 ? console.log(i) : null
// }

// task 9
// let arr =  [3, 4, 6, -12, 3, 5,-6,-9,9]
// let sum = 0

// for(let i = 0; i< arr.length; i++){
//     arr[i] > 0 ? sum += arr[i] : null  
// }
// console.log(sum);

// let i = 0
// while(i < arr.length){
//     arr[i] > 0 ? sum += arr[i] : null  
//     i++
// }
// console.log(sum);

// for(i in arr){
//     arr[i] > 0 ? sum += arr[i] : null  
// }
// console.log(sum);

// for(i of arr){
//     i > 0 ? sum += i : null; 
// }
// console.log(sum);

// task 10
// let arr = [5, 1, 3, 7,4,6, 15, 3, 20]

// for(let i = 0; i< arr.length; i++){
//     arr[i] === 4 ? console.log('Yes') : null
// }

// let i = 0
// while(i < arr.length){
//     arr[i] === 4 ? console.log('Yes') : null
//     i++
// }

// for(let key in arr){
//     arr[key] === 4 ? console.log('Yes') : null
// }

// for(let i of arr){
//     i === 4 ? console.log('Yes') : null
// }

// task 11
// let arr = [10, 20, 30, 40, 135, 2000]

// for(let i = 0; i< arr.length; i++){
//     +arr[i].toString()[0] === 1 || +arr[i].toString()[0] === 2 || +arr[i].toString()[0] === 5 ? console.log( arr[i]) : null
// }

// let i = 0
// while(i < arr.length){
//     +arr[i].toString()[0] === 1 || +arr[i].toString()[0] === 2 || +arr[i].toString()[0] === 5 ? console.log(arr[i]) : null
//     i++
// }

// for(i in arr){
//     +arr[i].toString()[0] === 1 || +arr[i].toString()[0] === 2 || +arr[i].toString()[0] === 5 ? console.log(arr[i]) : null
// }

// task 12
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res = '-'

// for(let i = 0; i< num.length; i++){
//     res += num[i] + '-'
// }
// console.log(res);

// let i = 0
// while(i < num.length){
//     res += num[i] + '-'
//     i++
// }
// console.log(res);

// for(let key in num){
//     res += num[key] + '-'
// }
// console.log(res);

// for(let i of num){
//     res += num[i -1] + '-'
// }
// console.log(res);

// task 13
// let num = 0

// for(let  n=1000; n > 50; n = n / 2){
//     num += 1
//     console.log(n);
// }
// console.log(`${num} jolu итерация boldu`);

// let n = 1000
// while(n >= 50){
//     num += 1
//     n = n / 2 
//     console.log(n);
// }
// console.log(`${num} jolu итерация boldu`);


// task 14
// let arr = [1, 2, 3, 7, 6, 9]
// let sum = 0

// for(let i = 0; i< arr.length; i++){
//     sum += arr[i] / arr.length
// }
// console.log(Math.floor(sum));

// let i = 0
// while(i < arr.length){
//     sum += arr[i] / arr.length
//     i++
// }
// console.log(Math.floor(sum));

// for(let key in arr){
//     sum += arr[key] / arr.length
// }
// console.log(Math.floor(sum));

// for(let i of arr){
//     sum += i / arr.length
// }
// console.log(Math.floor(sum));


// task 15
// let arr =  [1, 2, 3, 4, 5]
// let sum = 0

// for(let i = 0; i< arr.length; i++){
//     sum += arr[i] ** 2
// }
// console.log(sum);

// let i = 0
// while(i< arr.length){
//     sum += arr[i] ** 2
//     i++
// }
// console.log(sum);

// for(let key in arr){
//     sum += arr[key] ** 2
// }
// console.log(sum);

// for(let i of arr){
//     sum += i ** 2
// }
// console.log(sum);

// task 16
// let arr = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12]

// for(let i = 0; i< arr.length; i++){
//     arr[i] > 0 && arr[i] < 10 ? console.log(arr[i]): null
//  }

// let i = 0
// while(i < arr.length){
//     arr[i] > 0 && arr[i] < 10 ?  console.log(arr[i]) : null
//     i++
// }

// for(let key in arr){
//     arr[key] > 0 && arr[key] < 10 ? console.log(arr[key]) : null
// }

// for(let key of arr){
//     key > 0 && key < 10 ? console.log(key) : null
// }

// task 17
// let arr = []
// for(let i = 0; i< 10; i++){
//     let number = Math.floor(Math.random() * 10) + 1
//     arr.push(number)
// }
// console.log(arr);

// let i = 0
// while(i < 10){
//     let number = Math.floor(Math.random() * 10) + 1
//     arr.push(number)
//     i++
// }
// console.log(arr);

// task 18
// let num = 0
// for(let i = 0; i < 1000; i++){
//     i % 3 === 0 || i % 5 === 0 ? num += i : null
// }
// console.log(num);

// let i = 0
// while(i < 1000){
//     i % 3 === 0 || i % 5 === 0 ? num += i : null
//     i++
// }
// console.log(num);


// task 19
// let number = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

// for(let i = 0; i< number.length; i++){
//     number[i] % 2 !== 0 && number[i] > 10 ? console.log(number[i]) : null
// }

// let i = 0
// while(i < number.length){
//     number[i] % 2 !== 0 && number[i] > 10 ? console.log(number[i]) : null
//     i++
// }

// for(let a in number){
//     number[a] % 2 !== 0 && number[a] > 10 ? console.log(number[a]) : null
// }

// for(let a of number){
//     a % 2 !== 0 && a > 10 ? console.log(a) : null
// }

// task 20
// let user = 'jzvzszrzpz'
// let res = user.split('').map((el,idn) => idn % 2 !== 0 ? el.toUpperCase() : el)
// console.log(res.join(''));




















