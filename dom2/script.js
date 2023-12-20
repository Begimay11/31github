// const boxes = document.querySelector('.boxes')
// const box = document.querySelectorAll('.box')
// const active = document.querySelector('.active')
// const clear = document.querySelector('.clear')

// box.forEach(el => {
//     el.addEventListener('mouseover',()=> {
//         el.style.background = randomColor()
//         el.style.boxShadow = `0 0 30px ${randomColor()}`
//     })
//     el.addEventListener('mouseout',()=> {
//         el.style.background = ''
//         el.style.boxShadow = ''
//     })
// })
// active.addEventListener('click', ()=> {
//     box.forEach(el => {
//         el.style.background = randomColor()
//         el.style.boxShadow = `0 0 30px ${randomColor()}`
//         setInterval(()=> {
//             box.forEach(el => {
//                 el.style.background = randomColor()
//                 el.style.boxShadow = `0 0 30px ${randomColor()}`
//             })
//         },2000)
//     })
// })
// clear.addEventListener('click',()=> {
//     box.forEach(el => {
//         el.style.background = ''
//         el.style.boxShadow = ''
//         clearInterval(int) //?
//     })
// })

// // function colors () {
// let int = setInterval(()=> {
//         box.forEach(el => {
//             el.style.background = randomColor()
//             el.style.boxShadow = `0 0 30px ${randomColor()}`
//         })
//     },1000)
// // }



// function randomColor(){
//     let color = '#'
//     for(let i = 1; i<= 6; i++){
//         color += Math.floor(Math.random()* 10)
//     } 
//     return color
// }
// console.log(randomColor());