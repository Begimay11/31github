const container = document.querySelector('.container')
const active = document.querySelector('.active')
const clear = document.querySelector('.clear')

let n = 600

for(let i = 1; i <= n; i++){
    const square = document.createElement('div')
    square.setAttribute('class','square')
    container.append(square)
    square.addEventListener('mouseover',()=> {
        square.style.background = randomColor()
        square.style.boxShadow = `0 0 10px ${randomColor()}`
    })
    square.addEventListener('mouseleave',()=> {
        square.style.background = ''
        square.style.boxShadow = ''
    })
}
function activeColor(){
    active.addEventListener('click',activeColor())
}
// active.addEventListener('click',()=> {
//     square.forEach((el)=> {
//         el.style.background = randomColor()
//     })
// })
// clear.addEventListener('click',()=> {
//     container.forEach(el=> {
//         el.style.background = 'yellow'
//     })
// })

const randomColor = ()=> {
    let color = '#'
    for(let i = 1; i <= 6; i++){
        color += Math.floor(Math.random() * 10)
    }
    return color
}