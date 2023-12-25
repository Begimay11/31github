const textInput = document.querySelector('.text')
const numberInput = document.querySelector('.number')
const addBtn = document.querySelector('button')
const newList = document.querySelector('.newList')
const addlist = document.querySelector('.addlist')
const textObe = document.querySelector('.obe')

addBtn.addEventListener('click',()=> {
    addList()
})
numberInput.addEventListener('keydown',(e)=> {
    if(e.key === 'Enter'){
        addList()
    }
})
function addList(){
    if(textInput.value !== '' && numberInput.value !== ''){
        const h3 = document.createElement('h3')
        const span = document.createElement('span')
        const text = document.createElement('p')
        text.setAttribute('class','errText')
        span.innerHTML = 'X'
        newList.append(h3)
        newList.append(span)
        addlist.append(text)
        h3.innerHTML = `${textInput.value} <br> ${numberInput.value}`
        textInput.value = ''
        numberInput.value = ''
        textInput.style.border = ''
        numberInput.style.border = ''
    } else if(textInput.value === '' || numberInput.value === ''){
        alert('Zapolnite vse stroki')
        textInput.style.border = '2px solid red'
        numberInput.style.border = '2px solid red'
        // textInput.innerText = 'toluk jaz'
        text.innerHTML = 'toluk jazsan'
        // textObe.style.display = 'block'
    }

    span.addEventListener('click',()=> {

    })
}