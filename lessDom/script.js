// const h1 = document.querySelector('h1')
// const text = document.querySelector('.text1')
// const clear = document.querySelector('.Clear')
// const show = document.querySelector('.show')
// const open = document.querySelector('.open')
// const opens = document.querySelector('.opens1')
// const expo = document.querySelector('.expo')

// h1.style.color = 'red'
// text.style.background = 'green'
// text.style.display = 'none'
// opens.style.display = 'none'
// expo.style.display = 'none'

// open.addEventListener('click', ()=> {
//     open.style.display = 'none'
//     opens.style.display = 'block'
//     expo.style.display = 'block'
// })
// expo.addEventListener('click', ()=> {
//     expo.style.display = 'none'
//     opens.style.display = 'none'
//     open.style.display = 'block'
// })
// show.addEventListener('click', ()=> {
//     text.style.display = 'block'
// })

// clear.addEventListener('mouseover', ()=> {
//     text.style.display = 'none'
// })





const sveto = document.querySelector('.svetoFor')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

let color = 'green'

setInterval(()=> {
    color = color === 'red' ? 'green' : 'red'
 },4000)

 setInterval(()=> {
    yellow.style.background = 'yellow'
    green.style.background = 'none' 
    red.style.background = 'none'  

 },2000)

setInterval(()=> {
    yellow.style.background = 'none'
    if( color === 'red'){
        green.style.background = 'green' 
         red.style.background = 'none' 
    }
     else{
        red.style.background = 'red'
        green.style.background = 'none' 
     } 
},4000)

