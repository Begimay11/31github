// unshift -> bashyna el koshot
// shift-> bashyndagy el ochurot
// pop()=> ayagyndagy el ochurot
// push()=> ayagyna el koshot.



// let str = 'Begimayka'
// let res = str.split('').reverse().map((el)=> el.toUpperCase()).reverse().join('')
// console.log(res);

// let sum = [12,78,23,43]
// console.log(Math.min(...sum));

// console.log(Math.pow(4,4));

// console.log(Math.log1p(3)); ?


function usdcny(usd) {
    let res = `${usd * 6.75} Chinese Yuan`;
    return res
}
// console.log(`${usdcny(15)} Chinese Yuan`);
console.log(usdcny(190));







// let age = prompt("Сколько Вам лет?");
// age > 14 ? alert('Kruto') : alert('Jakshyy');




//   let ask = (ques,yes,not)=> {
//     confirm(ques) ? yes() : not()
//   }
//   ask("Вы согласны?",()=> {alert('Вы согласились.')},function() {alert('Вы отменили выполнение.')})


// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = prompt("Что вы хотите узнать о пользователе?", "age");
  
//   alert( user[key] );


// let user = {
//     name: "John",
//     age: 30
//   };
  
//   let key = "name";
//   alert( user.age );

// let schedule = {};

// const isEmpty =(obj)=> {
//     for(let key in obj){
//         return false
//     }
//     return true
// }

// alert( isEmpty(schedule) ); 

// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) );


// const user = {
//     name : "Pete"
// }
// console.log(user);

// user.name = "Marks"
// console.log(user);

// let sum = 0
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
//   let salAry = (obj)=> {
//       for(let key in obj){
//         sum +=obj[key];
//       }
//       return false
//   }
//   salAry(salaries);
//   console.log(sum);



//   // до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  let multiplyNumeric =(obj)=> {
    //   let res = obj.typeof(Number) ? obj : null

    for(let i in menu){
        console.log(typeof(menu[i]))
    }
    //   return 
  }
 multiplyNumeric(menu);
  