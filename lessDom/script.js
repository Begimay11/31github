const h1 = document.querySelector('h1')
const text = document.querySelector('.text1')
const clear = document.querySelector('.Clear')
const show = document.querySelector('.show')
const open = document.querySelector('.open')
const opens = document.querySelector('.opens1')
const expo = document.querySelector('.expo')

h1.style.color = 'red'
text.style.background = 'green'
text.style.display = 'none'
opens.style.display = 'none'
expo.style.display = 'none'

open.addEventListener('click', ()=> {
    open.style.display = 'none'
    opens.style.display = 'block'
    expo.style.display = 'block'
})
expo.addEventListener('click', ()=> {
    expo.style.display = 'none'
    opens.style.display = 'none'
    open.style.display = 'block'
})
// show.addEventListener('click', ()=> {
//     text.style.display = 'block'
// })

// clear.addEventListener('mouseover', ()=> {
//     text.style.display = 'none'
// })

