// Object-> ssylochnyi tip dannyi
// key: value
// let user = {
//     name: 'Nurtilek',
//     age: 17
// }
// console.log(user);


// let people = [
//     {name : 'Nurtilek',id: 1,age: 16},
//     {name : 'Nurbek',id: 1,age: 43},
//     {name : 'Nur',id: 1,age: 32},
//     {name : 'Askarbekov',id: 1,age: 29},
//     {name : 'ALi',id: 1,age: 24}
// ]
// let res = people.map((el)=> {
//     return el.age === 20 ? el.age + 5 : el.age -1
// })
// let sum = people.reduce((el,acc)=> {
//     return el.age > acc.age ? el : acc
// }).age

// let motion = people.map((el)=> el.name.length === 3 ?  'Academy' : el.name)

// let result = people.filter((el)=> el.name.length > 6).map((el)=> el.name.toUpperCase())
// console.log(res);
// console.log(result);
// console.log(sum);
// console.log(motion);

// HW
// task 1
// let obj = {a: 1, b: 2, c: 3}
// console.log(Object.keys(obj).length);

// task 2
// let obj = {a: 1, b: 2, c: 3}
// console.log(obj.c);
// console.log(obj['c']);
 
// task 3
// let obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// console.log(`${obj.Ширин} ${obj.Атай}`);

// task 4
// let obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Атай = 500
// console.log(obj);

// task 5
// let obj = {Ширин: '1000', Айжан:'500', Атай: '200'}
// obj.Медет = 1500
// console.log(obj);

// task 6
// let obj = {Ширин: '1000', Айжан:'500',Атай: {salary: '500'}}
// console.log(obj.Атай.salary);

// task 7
// let week = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
// }
// console.log(week[1]);

// task 8
// let num = 5
// let week = {
//     1: 'Monday',
//     2: 'Tuesday',
//     3: 'Wednesday',
//     4: 'Thursday',
//     5: 'Friday',
//     6: 'Saturday',
//     7: 'Sunday'
// }
// console.log(week[num]);

// task 9
// let obj = {Ширин: '1000', Айжан:'500',Атай: {salary: '500'}}
// console.log(Object.keys(obj));

// // task 10
// let obj = {Ширин: '1000', Айжан:'500',Атай: {salary: '500'}}
// console.log(Object.values(obj));

// task 11
// let obj = {Ширин: '1000', Айжан:'500',Атай: {salary: '500'}}
// console.log(Object.entries(obj));

// // task 12
// let nameFn = (user)=> {
//     return user % 2 === 0 ? 0 : 1
// }
// console.log(nameFn('Igor'));

// task 13
// let user = [ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]
// console.log(user.map((el)=> el.id));

// let userFn = (user)=> {
//     return user.map((el)=> el.id)
// }
// console.log(userFn([ {id: 3}, {id: 5}, {id: 6}, {id: 7} ]));

// task 14
// let user = {name: 'Igor'}
// user.age = 25
// user.name = 'Azat'
// console.log(user);

// task 15
// let product = {
//     name: "headphones",
//     price: 73,
//     discount: 0
//     }
//     let res = product.price > 100 ? product.price - product.price * 0.1 :product.price -  product.price * 0.07
//     console.log(res);