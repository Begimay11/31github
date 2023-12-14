// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

// if (year == 2015) {
//   alert( 'Да вы знаток!' );
// } else {
//   alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
// }


// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);


// let user = {
//     name: "John",
//     age: 30
//   };
  
//   for (let value of Object.values(user)) {
//     alert(value); 
//   }


let user = {
    name: "John",
    age: 30
  };
  
  for (let value of Object.values(user)) {
    alert(value); 
  }

  
const sumSalaries=(num)=> {
    for(let i in num){
        console.log(Object.values(num)[i] += Object.values(num)[i]);
        // Object.values(num[i])
    }
    // let res = num.reduce((acc,el)=> acc + el)
    return i
}
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
//   console.log(sumSalaries([3,5,6,7,8,9]));
  console.log(sumSalaries(salaries) );
  