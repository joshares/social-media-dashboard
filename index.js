'use strict;'

const lightMode = document.querySelector('.light')
const darkMode = document.querySelector('.dark')
const button = document.querySelector('.button')
const div = document.querySelectorAll('.div')
const div2 = document.querySelectorAll('.div2')
const h1 = document.querySelectorAll('h1')
const h2 = document.querySelectorAll('h2')
const h4 = document.querySelector('h4')
const h3 = document.querySelector('h3')
const label = document.querySelector('label')


// div2.style.backgroundColor = '#222'
console.log(label)

lightMode.addEventListener('click',function(){
  // alert(' dark mode activated')
  button.classList.toggle('grad')
  label.textContent = 'light mode'
  darkMode.classList.toggle('hidden')
  lightMode.classList.toggle('hidden')
  document.querySelector('body').classList.toggle('darkmode'); 
  h4.classList.toggle('black')
  h3.classList.toggle('black')
  for (let i = 0; i < div.length; i++){
 div[i].classList.toggle('divx');
 }
 for (let i = 0; i < div2.length; i++){
 div2[i].classList.toggle('divx');
}
 for (let i = 0; i < h1.length; i++){
 h1[i].classList.toggle('black');
}
 for (let i = 0; i < h2.length; i++){
 h2[i].classList.toggle('black');
}

 });


darkMode.addEventListener('click',function(){
 // alert(' light mode activated')
   label.textContent = 'dark mode'
   button.classList.toggle('grad')

  darkMode.classList.toggle('hidden')
  lightMode.classList.toggle('hidden')
  document.querySelector('body').classList.toggle('darkmode'); 
  h4.classList.toggle('black')
  h3.classList.toggle('black')
  for (let i = 0; i < div.length; i++){
 div[i].classList.toggle('divx');
 }
 for (let i = 0; i < div2.length; i++){
 div2[i].classList.toggle('divx');
}
 for (let i = 0; i < h1.length; i++){
 h1[i].classList.toggle('black');
}
 for (let i = 0; i < h2.length; i++){
 h2[i].classList.toggle('black');
}

 })
