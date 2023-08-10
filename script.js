const burger = document.querySelector('.burger-menu');
const menuMobile = document.querySelector('.menu-mobile')
const header = document.querySelector('header')
let container = document.querySelectorAll('.container')

burger.addEventListener('click',(e)=>{
e.preventDefault();

menuMobile.style.display='block'
header.style.display='none'
menuMobile.classList.add('active')


container.forEach((item,index)=>{

item.style.display='none'

})


})
