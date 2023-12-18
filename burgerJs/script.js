const spanDiv = document.querySelector('.span-icons')
const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3')
const imgFood = document.querySelector('.img-food')
const menuBurgers = document.querySelector('.menu')

let burger = false

spanDiv.addEventListener('click', ()=> {
    burger = !burger
    imgFood.style.display = burger ? 'none' : 'block'
    menuBurgers.style.display = burger ? 'block'  : 'none'

    span1.style.transform = burger ? 'rotate(225deg)': ''
    span1.style.top = burger ? '18px' : ''

    span2.style.transform = burger ? 'scale(0)' : 'scale(1)'

    span3.style.transform = burger ? 'rotate(-225deg)' : ''
    span3.style.bottom = burger ? '19px' : ''
})

