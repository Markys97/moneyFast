let burgerBtn= document.querySelector('.header__burger');
let menu= document.querySelector('.header__menu');
let menuLinks= document.querySelectorAll('.header__menu-link');

burgerBtn.addEventListener('click',e=>{
    menu.classList.toggle('open-menu')
})

menuLinks.forEach(link=>{
    link.addEventListener('click',e=>{
        menu.classList.remove('open-menu');
    })
})