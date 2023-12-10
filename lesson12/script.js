
// for
// while
// do while
// for in
// for of
// concat -> eki massivdi biri birine koshush uchun koldonulat


// blochniy oblast vidimosti -> bodynin ichinde deystvie bolso
// for(let i = 1; i <= 10; i++){
//     console.log(i); // -> iteration  bodyde bolot
// }

// let i = 1
// console.log(i);
// console.log(i = i * 34);
// console.log(i = i - 12);
// console.log(i = i * 10 + 14);

// console.log(i++);
// console.log(i);
// console.log(++i);
// console.log(i++);
// console.log(i++);
// console.log(++i);
// console.log(++i);


// let arr = []
// for(let i = 0; i < 10; i++){
//     if(i % 2 === 0){
//         arr.push(i)
//     }
// }
// console.log(arr);



// let arr = ''
// for(let i = 1; i <= 7; i++){
//     arr += '#'
//     console.log(arr);
// }

// for(let i = 6; i >= 1; i--){
//     let res = arr.slice(0,i)
//     console.log(res);
// }

// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50













// HW
// task 1
// for(let i = 1; i <= 50; i++){
//     console.log(i);
// }

// task 2
// let array = []
// for(let i = 1; i <= 10;i++){
//     array.push('X');
//     console.log(array);
// }
// for(let i = 9; i > 0; i--){
//     let res = array.slice(0,i)
//     console.log(res);
// }

// task 3
// let num = [5, 3, 1, 2, 7,9,12]
// for(let i = 0; i < num.length; i++){
//     console.log(num[i]);
// }

// task 4
// let arr2 = [5, 2, 1, 2] 
// let sum = 0
// for(let i = 0; i< arr2.length; i++){
//     sum += arr2[i]
// }
// console.log(sum);

// task 5
// for(let i = 0; i<= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// task 6
// let sum = 0
// for(let i = 1; i <= 100; i++){
//     sum += i
// }
// console.log(sum);

// task 7 
// let num = [2, 4, 5, 6, 8]
// let summ = 0

// for(let i = 0; i< num.length; i++){
//     let result = summ += num[i]
//     console.log(result);
// }
// console.log(summ);


//  task 8
// let arr = [3, 4, 6,7,9,14,54,10, 12, 3, 5]

// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i]);
//     }
// }

// task 9
// let arr = [5, -1, 3, -7, 6, 15, -3, 20,-15,10]
// let summa = 0

// for(let i = 0; i < arr.length; i++){
//     arr[i] > 0 ? summa += arr[i] : null 
// }
// console.log(summa);

// task 10
// let num = [5, 1, 3, 7, 4,6, 15, 3, 20]
// for(let i = 1; i< num.length; i++){
//     num[i] == 4 ? console.log('Yes!') : null;;
// }

// task 11
let num =  [10, 20, 30, 40, 135, 2000]

// for(let i = 0; i< num.length; i++){
//     +num[i].toString()[0] === 2 || +num[i].toString()[0] === 1 || +num[i].toString()[0] === 5  ? console.log(num[i]) :  null 
// }

// for(let i = 0; i < num.length; i++){
//     let str = num[i].toString()
//     let res =  +str[0] == 2 || +str[0] == 1 || +str[0] == 5 ? str[i] : null;
//     console.log(res);
// }

// task 12
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let res = '-'
// for(let i =0; i < number.length; i++){
//    res += number[i] + '-'
// }
// console.log(res.split());

// task 13
let n=1000
for(let i = 0; i< n; i++){
    n % 2 === 0
}
console.log(n);


// task 14
// let a = [1, 2, 3, 7, 6, 9]
// let sum = 0
// for(let i = 0; i< a.length; i++){
//     sum += a[i] / a.length
// }
// console.log(sum);