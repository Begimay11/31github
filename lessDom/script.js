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

red.addEventListener('click',()=> {
    yellow.style.background = 'none'
    green.style.background = 'none'
})
yellow.addEventListener('click',()=> {
    red.style.background = 'none'
    green.style.background = 'none'
})
green.addEventListener('click',()=> {
    red.style.background = 'none'
    yellow.style.background = 'none'
})
// setInterval(()=> {
//     sveto.forEach(el => {
//         // el.style.background = 'red'
//     });
// },2000)

function svetofors (){
    // setInterval(()=> {
    //     sveto.forEach(el => {
    //         // el.style.background = ''
    //     });
    // },2000)
}
console.log(svetofors());
// setInterval(()=> {
//     sveto.forEach(el => {
//         el.addEventListener('mouseover',()=> {
//             yellow.style.background = 'none'
//             green.style.background = 'none' 
//         })
//     });
// },1000)

