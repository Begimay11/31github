//  const str = "I am a Megalodon,oceans feeling like a pond"
//  let res = str.split(' ')
//  .map((el,idn)=> el)
//  .reduce((el,acc)=> el.length > acc.length ? el : acc)
//  console.log(res);


//  function checkTask(arr){
//      return arr.map((el)=> el.split(' ').length)
//  }
//  console.log(checkTask(["alice and bob love leetcode","i think so too",]));


//  let students = [
//     { student: 'Peter', marks: 12 },
//     { student: 'Jack', marks: 43 },
//     { student: 'Tom', marks: 92 },
//     { student: 'Helen', marks: 85 },
//     { student: 'Peter', marks: 58 },
//     { student: 'Peter', marks: 12 },
//     { student: 'Jessica', marks: 78 },
//   ];
//   console.log(students.sort((a,b)=> b.marks - a.marks));


// const poliWord = (str)=> {
//     let res = str.toLowerCase()
//     let result = res.split('').reverse().join('')
//     return result === res ? true : false
// }
// console.log(poliWord('r o t o r'));


// const numFn = (num,num2)=> {
//     return num.toString().length === num2.toString().length ? true : false
// }
// console.log(numFn(164,97));


// let product =  [{name: 'cake', price: 300, sale: 10},
// {name: 'coffee', price: 250, sale: 5},
// {name: 'juice', price: 200, sale: 15},
// {name: 'tea', price: 150, sale: 20},
// {name: 'iceCream', price: 120, sale: 4},
// {name: 'energy', price: 1800, sale: 25},]

// let productFunc = (prod)=> {
//     let count = 0
//     let name = product.map((el)=> el.name)
//     let price = product.map((el)=> el.price)
//     let disCount = product.map((el)=> el.price - el.price * (el.sale / 100))
//     let sale = product.map((el)=> el.sale)
//     let result = []

//     for(let i = 0; price.length > i; i++){
//         result.push(`name: ${name[count]}, oldPrice: ${price[count] + '$'}, discountedPrice: ${disCount[count] + '$'}, sale: ${sale[count] + '%'}`)
//         count += 1
//     }
//     return result
// }

// let second = productFunc(product)
// let count = 0

// for(let i = 0; product.length > 0; i++){
//     console.log(second[count]);
//     count += 1
//     product.length -= 1
// }


// console.log(product[0].price - product[0].price * (product[0].sale / 100));

// let priceTwo = product[1].price - product[1].price * product[1].sale / 100
// console.log(priceTwo);



// let product =  [{name: 'cake', price: 300, sale: 10},
// {name: 'coffee', price: 250, sale: 5},
// {name: 'juice', price: 200, sale: 15},
// {name: 'tea', price: 150, sale: 20},
// {name: 'iceCream', price: 120, sale: 4},
// {name: 'energy', price: 1800, sale: 25},]

// const productFunc = (prod)=> {
//     // let namer = prod.map((el)=> el.name)
//     // let price = prod.map((el)=> el.price)
//     // let sale = prod.map((el)=> el.sale)
//     // let discount = prod.map((el)=> el.price - el.price * (el.sale / 100))
//     // let result = []
//     return prod.map((el)=> `Name: ${el.name}, oldPrice:${el.price},discountedPrice: ${el.price - el.price * (el.sale / 100) + '$'},sale: ${el.sale + '%'}`).join(' '.repeat(200))
// }
// console.log(productFunc(product));


// const square = 8
// let string = ''

// for(let i = 0; i < square; i++){
//     for(let k = 0; k < square; k++){
//         string = string + '*'
//     }
//     string = string + '\n'
// }

// console.log(string);

// let a = +prompt('Kancha jashtasyz?')

// switch(a){
//     case 18:
//         alert('Sadikke bar')
//         break;
//     case 5:
//         alert('Jakshylap oinop al')
//         break
// }

// if(a > 1 && a < 6){
//     alert('Sadikke bar')
// }else if(a >= 7 && a < 18){
//     alert('Mektepke bar')
// } else{
//     alert('Ozuno ylaiyk jash jaz! ')
// }
// console.log(a);


// let day = prompt('Bir kundun atyn jaz')

// switch(day){
//     case 'Monday':
//     case 'Tuesday':
//     case 'Wednesday':
//     case 'Thursday':
//     case 'Friday':
//         alert('Budniy den')
//         break;
//     case 'Saturday':
//     case  'Sunday': 
//     alert('Dem alysh')
//     break

//     default : 
//     alert('Mynday nerse jok')
//     break
// }


// HW
// task 1
// let func = (num)=> {
//     return num.reduce((acc,el)=> acc < el ? acc : el)
// }
// console.log(func([3,45, 7,34, 2,0]));

// task 2
// let nameUser = (str)=> {
//     return str.toLowerCase().split('').sort().join('')
// }
// console.log(nameUser('Hello'))

// task 3
// let numFunc = (num)=> {
//     return num.filter((el)=> el % 2 === 0)
// }
// console.log(numFunc([1, 2, 3, 4, 5, 6,9,14]));

// // task 4
// const myFunc = (str)=> {
//     return str.filter((el)=> Number(el))
// }
// console.log(myFunc(['text', 3, 7, 'github', 13, 'dev']));


// // task 5
// const allFunc = (str)=> {
//     let max = str.reduce((el,acc)=> el > acc ? el : acc)
//     let min = str.reduce((el,acc)=> el < acc ? el : acc)
//     let arif = str.reduce((el,acc)=> el + acc)/ str.length
//     let lengArray = str.length
//     let allAns = `Мин элемент: ${min}, Макс элемент: ${max}, Длину массива: ${lengArray}, Среднее арифметическое: ${arif}`
//     return allAns.split()
// }
// console.log(allFunc([7,1, 13, 3, 77, 100,290]));

// task 6
// const myText = (str)=> {
//     return str.split('').map((el)=> el + el).join('')
// }
// console.log(myText('test'));

// task 7
// const persons = [
//     {name: 'Ivan', age: 27},
//     {name: 'Petya', age: 16},
//     {name: 'Erbol', age: 15},
//     {name: 'Aktai', age: 46},
//   ]
//   let res = persons.filter((el)=> el.age > 18).map((el)=> el.name).join()
//   console.log(res);

// task 9
// const chetFunc = (num)=> {
//     return num.find((el)=> el % 2 === 0)
// }
// console.log(chetFunc([5, 7, 33, 88, 92]));


// task 10
// const persons = [
//     {name: 'Ivan', age: 27},
//     {name: 'Ivan', age: 99},
//     {name: 'Petya', age: 16},
//     {name: 'Dima', age: 24},
//     {name: 'Petya', age: 16},
//   ]
// let res = persons.reduce((acc,el)=> acc.age > el.age ? acc : el).age  
// console.log(res);







// var items = [
//     { name: "Edward", value: 21 },
//     { name: "Sharpe", value: 37 },
//     { name: "And", value: 45 },
//     { name: "The", value: -12 },
//     { name: "Magnetic" },
//     { name: "Zeros", value: 37 },
//   ];
//   items.sort(function (a, b) {
//     if (a.name > b.name) {
//       return 1;
//     }
//     if (a.name < b.name) {
//       return -1;
//     }
//     // a должно быть равным b
//     return 0;
//   });

//   console.log(items);
