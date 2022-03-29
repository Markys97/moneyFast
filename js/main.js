let burgerBtn= document.querySelector('.header__burger');
let menu= document.querySelector('.header__menu');
let header= document.querySelector('.header');
let menuLinks= document.querySelectorAll('.header__menu-link');
let dollarsElt= document.querySelector('.tarif__pricing-number--dollars')
let roublesElt= document.querySelector('.tarif__pricing-number--rouble')
let montantTransfert= document.querySelector('.tarif__input input')
let btnConvertisor= document.querySelector('.tarif__btn')

const getDollars=()=>{
   
    let montantToSend= parseFloat(montantTransfert.value)
    let dollarsValue=  montantToSend/ 593.51;

    return dollarsValue.toFixed(2)
}
const getRouble=()=>{
    let dollars=  getDollars()
    let rouble= dollars * 81;

    return rouble.toFixed(2)
}


burgerBtn.addEventListener('click',e=>{
    menu.classList.toggle('open-menu')
})

menuLinks.forEach((link,index,arr)=>{
    link.addEventListener('click',e=>{
        menu.classList.remove('open-menu');

        if(window.screen.width >768){
            arr.forEach(item=>{
                item.classList.remove('link-active');
            })
        
            link.classList.add('link-active');
          }

    })



    
})

btnConvertisor.addEventListener('click',e=>{
    dollarsElt.textContent=getDollars();
    roublesElt.textContent=getRouble()
})


window.addEventListener('scroll',e=>{
    console.log(header)
   if( window.scrollY> 200){
    header.classList.add('header-fix')
   }else{
    header.classList.remove('header-fix')
   }
})