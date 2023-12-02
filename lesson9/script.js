// let num = [13,34,54,3,4,101]
// let res = num.reduce((acc,el)=> Math.max(acc,el))
// console.log(res);

// let num = [13,34,54,3,4,101,-3,-6]
// let res = num.filter((el)=> el > 0)
// .filter((el)=> el % 2 === 0)
// .map((el)=> el ** 2)
// .reduce((acc,el)=> acc + el)
// console.log(res);

// hoisting-> peremennyidy tuzgongo cheyin consoledon chygaruu


// let name = ['black','red','green','yellow']
// let nameFN = (names,namer)=> {
//     let names = name.reduce((acc,el)=> {
//     return acc.length > el.length ? acc : el
// })

// let namer = name.reduce((acc,el)=> {
//     return acc.length < el.length ? acc : el
// })
// }
// console.log(nameFN(names));

// let name = ['black','red','green','yellow']
// let names = name.reduce((acc,el)=> {
//     return acc.length > el.length ? acc : el
// })
// let user = names[0].toUpperCase() + names.slice(1,name.length +1) + names[names.length - 1].toUpperCase()

// let namer = name.reduce((acc,el)=> {
//     return acc.length < el.length ? acc : el
// })

// let middle = namer.length - (namer.length - namer.length % 2)

// console.log(user);
// console.log(namer.slice(0,middle) + namer[middle].toUpperCase() + namer.slice(middle+1));


    




// .map((el)=> {
//     return el[0].toUpperCase()
// })
// console.log(names.map((el)=> el[0].toUpperCase()));