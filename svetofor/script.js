const svetofor = document.querySelector('.svetofor')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

setInterval(()=> {
    green.style.background = '#ccc'
    red.style.background = '#ccc'
    yellow.style.background = 'yellow'
},2000)
let color = 'green'

setInterval(()=> {
    color = color === 'red' ? 'green' : 'red'
    yellow.style.background = '#ccc'
    if(color === 'red'){
        red.style.background = 'red'
        green.style.background = '#ccc'
    } else{
        red.style.background = '#ccc'
        green.style.background = 'green'
    }
},4000)