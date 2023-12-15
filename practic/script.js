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


// let user = {
//     name: "John",
//     age: 30
//   };
  
//   for (let value of Object.values(user)) {
//     alert(value); 
//   }

  
// const sumSalaries=(num)=> {
//     for(let i in num){
//         console.log(Object.values(num)[i] += Object.values(num)[i]);
//         // Object.values(num[i])
//     }
//     // let res = num.reduce((acc,el)=> acc + el)
//     return i
// }
//   let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };
// //   console.log(sumSalaries([3,5,6,7,8,9]));
//   console.log(sumSalaries(salaries) );
  

// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
  
//   alert(user.name); 
//   alert(user.isAdmin); 

  
//   function User(name) {
//     this.name = name;
//     this.isAdmin = false;
  
//   }

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
//   };
  
//   let json = JSON.stringify(student);
  
//   alert(typeof json); 
  
//   alert(json);
  

// let room = {
//     number: 23
//   };
  
//   let meetup = {
//     title: "Conference",
//     participants: [{name: "John"}, {name: "Alice"}],
//     place: room 
//   };
  
//   room.occupiedBy = meetup; 
  
//   alert( JSON.stringify(meetup, function replacer(key, value) {
//     alert(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
//   }));
  
  

// function loadScript(src) {
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
//   }

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback(script);
//     document.head.append(script);
//   }
  
//   loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     alert(`Здорово, скрипт ${script.src} загрузился`);
//     alert( _ );
//   });
  

//   let user = {
//     name: "Джон",
//     hi() { alert(this.name); },
//     bye() { alert("Пока"); }
//   };
  
//   user.hi();


//   (async () => {
//     let response = await fetch('/article/promise-chaining/user.json');
//     let user = await response.json();
//     ...
//   })();

  
//   class Thenable {
//     constructor(num) {
//       this.num = num;
//     }
//     then(resolve, reject) {
//       alert(resolve);
      // выполнить resolve со значением this.num * 2 через 1000мс
//       setTimeout(() => resolve(this.num * 2), 1000); // (*)
//     }
//   };
  
//   async function f() {
//     // код будет ждать 1 секунду,
//     // после чего значение result станет равным 2
//     let result = await new Thenable(1);
//     alert(result);
//   }
  
//   f();

//   async function f() {

//     try {
//       let response = await fetch('/no-user-here');
//       let user = await response.json();
//     } catch(err) {
//       // перехватит любую ошибку в блоке try: и в fetch, и в response.json
//       alert(err);
//     }
//   }
  
//   f();
//   function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
  
//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404
  