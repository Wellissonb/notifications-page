const mark = document.querySelector('.button')
const unread = document.querySelectorAll('.unreadComentary')
const amount = document.querySelector('#amount')

amount.innerHTML = unread.length
mark.addEventListener('click',(botao)=>{
    botao.preventDefault()

     unread.forEach((element)=>{
        let getAfter = window.getComputedStyle(element,'::after')
        element.style.setProperty('--afterBack','transparent')
     })
     amount.innerHTML = '0'
})


