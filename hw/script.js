// HW
// 1
// let num = [315, 64, 75, 43, 65, 63,10]
// let sum = 0
// let res = num.map((el)=> {
//     return  sum +=el
// })
// console.log(sum);

// variant 2
// let func = (n)=> {
//     let sum = 0
//     return  n.map((el)=> {
//         return sum += el
//     }) 
// }
// console.log(func(num));


// task2-?
// let user = ['Аскар', 'Баяман', 'Калмамат']
// let users = user.map((el)=> {
//     if(el.includes('а') || el.includes('А')){
//         let m =  el.replaceAll('А','я')
//         let n =  el.replaceAll('а','я')
//         return {m,n}
//     }
// })
// console.log(users);

// task3
// let user = ['Аскар', 'Баяман', 'Калмамат','лвашрвк','лвашрв']
// let res = user.filter((el)=> {
//     if(el.includes('к') || el.includes('К')){
//         return el
//     }
// })
// console.log(res);

// task4
// let num = [4, 54, 49]
// let sum = num.map((el)=> {
//     return el ** 2
// })
// console.log(sum);

// task 5
// let num = [3134, 4, -143, -245, -214,78,-90]
// let sum = num.filter((el)=> {
//     return el < 0
// })
// console.log(sum);

// task 6
// let num = [3, 51, 30, 54, 60,55,80]
// let sum = num.filter((el)=> {
//     return el % 2 === 0
// })
// console.log(sum);

// task 7
// let user = ['Бегимай', 'Баяман', 'Калмамат','jvhff']
// let users = user.filter((el)=> {
//     return el.length > 5
// })
// console.log(users);

// task8
// let num = [-13, 96, -41, -28, 40,-90]
// let res = num.filter((el)=> {
//     return el < 0
// }).length
// console.log(res);

// task9
// let num =  [3, 51, -30, -54, 60,64]
// let sum = num.filter((el)=> {
//     return el > 0
// }).filter((el)=> {
//     return el > 30
// }).map((el)=> {
//     return Math.sqrt(el);
// })
// console.log(sum);


// task 12.  Вам дан массив ['Бегимай', 'Баяман', 'Калмамат']. Выведите длину каждой строки.
// let user = ['Бегимай', 'Баяман', 'Калмамат']
// let users = user.map((el)=> {
//     return el.length
// })
// console.log(users);

// task 13. Вам дан массив с строками ['Аскар', 'Баяман', 'Калмамат', 'Ben'].
// Выведите все вторые строки в верхнем регистре.

// variant 1
// let user =  ['Аскар', 'Баяман', 'Калмамат', 'Ben','LowerCase']
// let users = user.map((el)=> {
//     return el[1].toUpperCase()
// }).join()
// console.log(users);

// variant 2
// let user =  ['Аскар', 'Баяман', 'Калмамат', 'Ben','LowerCase','Sfhcfg']
// let users = user.filter((el,index)=> {
//     return (index+1) % 2 === 0
// }).map((el)=> {
//     return el.toUpperCase()
// })
// console.log(users);

// task 14
// let user = ['асКар', 'бЯяман', 'калМмамат']
// let users = user.map((el)=> {
//     let users1 = el.toLocaleLowerCase()
//     return el[0].toUpperCase() + users1.slice(1)
// })
// console.log(users);

// task 15
// let prices = [10, 20, 30, 40, 50];
// let res = prices.map((el)=> {
//     return '$' + el
// }).join()
// console.log(res);

// task 16
// let numbers = [10, 20, 30, 40, 50];
// let sum = numbers.find((el)=> {
//     return el > 25
// })
// console.log(sum);

// task 17
// let words = ["apple", "banana","cherry", "date"];
// let b = words.find((el)=> {
//     return el.includes('b')
// })
// console.log(b);

// task 18 Поиск элемента по индексу
// Создайте массив чисел и используйте метод find() для нахождения элемента по его индексу 2

// let numbers = [10,8, 20, 30, 40, 50];
// let res = numbers.find((el,index)=> {
//     return (index+1) % 2 === 0 
// })
// console.log(res);

// task 19
// let fruits = ["apple", "banana", "cherry"];
// console.log(fruits.join(' '));
 
// task 20
// Объединение пути к файлу
// Создайте массив строк, представляющих части пути к файлу, и используйте метод join() для объединения их в один путь.
// let pathParts = ["folder", "subfolder", "file.txt"];

// task 21
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers.join());

// task 22
let sentence = "Это пример разделения строки на слова";

// task 23
// Разделение строки по запятой
// Разделите строку, содержащую перечень элементов, разделенных запятыми, на массив элементов.
// let items = "apple, banana, cherry, date";

