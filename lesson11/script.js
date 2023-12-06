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



let product =  [{name: 'cake', price: 300, sale: 10},
{name: 'coffee', price: 250, sale: 5},
{name: 'juice', price: 200, sale: 15},
{name: 'tea', price: 150, sale: 20},
{name: 'iceCream', price: 120, sale: 4},
{name: 'energy', price: 1800, sale: 25},]

const productFunc = (prod)=> {
    // let namer = prod.map((el)=> el.name)
    // let price = prod.map((el)=> el.price)
    // let sale = prod.map((el)=> el.sale)
    // let discount = prod.map((el)=> el.price - el.price * (el.sale / 100))
    // let result = []
    return prod.map((el)=> `Name: ${el.name}, oldPrice:${el.price},discountedPrice: ${el.price - el.price * (el.sale / 100) + '$'},sale: ${el.sale + '%'}`).join(' '.repeat(200))
}
console.log(productFunc(product));