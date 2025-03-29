 
 const botao = document.querySelector('.bot-menu')
 const menulateral = document.querySelector('.menu-lateral')
 const texto = document.querySelector('.texto')
 const fundo = document.querySelector('.fundo')

 botao.addEventListener('click',()=>{
    menulateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    texto.classList.toggle('ativo')
    fundo.classList.toggle('ativo')
    document.body.style.backgroundColor = menulateral.classList.contains('ativo') ? '#34495e' :'#ecf0f1'    
 })

 fundo.addEventListener('click', () =>{
   
    menulateral.classList.remove('ativo')
    botao.classList.remove('ativo')
    texto.classList.remove('ativo')
    fundo.classList.remove('ativo')
    document.body.style.backgroundColor ='#ecf0f1'     
 })