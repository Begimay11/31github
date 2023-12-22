const spanDiv = document.querySelector('.span-icons')
const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3')
const imgFood = document.querySelector('.img-food')
const menuBurgers = document.querySelector('.menu')
const burgerMenu = document.querySelector('.burgerMenu')
const imgMenu = document.querySelector('.img-menu')
const menuIcons = document.querySelector('.menuLast')
const categories = document.querySelector('.category')
const Blogs = document.querySelector('.Blogs')
const About = document.querySelector('.About')
const industri = document.querySelector('.industri')
const sertificate = document.querySelector('.sertificate')
const menuCategory = document.querySelector('.menus')
const blogImg = document.querySelector('.blogImg')
const textBlog = document.querySelector('.textBlog')
const realCategory = document.querySelector('.realCategory')
const cateClass = document.querySelector('.categories')
const garniry = document.querySelector('.garniry')
const deserty = document.querySelector('.deserty')
const sousy = document.querySelector('.sousy')
const pizza = document.querySelector('.pizza')
const sushi = document.querySelector('.sushi')
const group = document.querySelector('.group')

let burger = false
// sertificate.style.display = 'none'

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

burgerMenu.addEventListener('click', ()=> {
    menuBurgers.style.display = 'none'
    spanDiv.style.display = 'none'
    imgMenu.style.display = 'block'
    menuIcons.style.display = 'block'
})
menuIcons.addEventListener('click', ()=> {
    menuBurgers.style.display = 'block'
    spanDiv.style.display = 'block'
    imgMenu.style.display = 'none'
    menuIcons.style.display = 'none'
    menuCategory.style.display = 'none'
    blogImg.style.display = 'none'
    cateClass.style.display = 'none'
    group.style.display = 'none'
    sertificate.style.display = 'none'
})
realCategory.addEventListener('click',()=> {
    menuBurgers.style.display = 'none'
    spanDiv.style.display = 'none'
    menuIcons.style.display = 'block'
    cateClass.style.display = 'block'

    setTimeout(()=> {
    garniry.style.opacity = '1'
    garniry.style.color = 'black'
    },1000)

    setTimeout(()=> {
    deserty.style.opacity = '1'
    deserty.style.color = 'black'
    },2000)
    setTimeout(()=> {
    sousy.style.opacity = '1'
    sousy.style.color = 'black'
    },3000)
    setTimeout(()=> {
    pizza.style.opacity = '1'
    pizza.style.color = 'black'
    },4000)
    setTimeout(()=> {
    sushi.style.opacity = '1'
    sushi.style.color = 'black'
    },5000)
})
About.addEventListener('click', ()=> {
    menuBurgers.style.display = 'none'
    spanDiv.style.display = 'none'
    menuIcons.style.display = 'block'
    group.style.display = 'block'
})
Blogs.addEventListener('click', ()=> {
    menuBurgers.style.display = 'none'
    spanDiv.style.display = 'none'
    menuIcons.style.display = 'block'
    blogImg.style.display = 'block'
    textBlog.style.display = 'block'
})
industri.addEventListener('click',()=> {
    menuBurgers.style.display = 'none'
    spanDiv.style.display = 'none'
    sertificate.style.display = 'block'
    // sertificate.style.display = 'block'
    menuIcons.style.display = 'block'
})
console.log(sertificate);

