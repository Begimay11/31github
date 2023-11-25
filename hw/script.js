// HW
// 1
let num = [315, 64, 75, 43, 65, 63]
let sum = 0
// let res = num.map((el)=> {
//     return  sum +=el
// })
// console.log(sum);

let func = (n)=> {
    return  n.map((el)=> {
        return sum += el
    }) 
}
console.log(func(num));
// 2
// let user = ['Askar','Bayaman','Kalmamat']
