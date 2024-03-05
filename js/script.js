//alert('js carregado');

//seleção de DOM (basicamente os elemento do html)
//console.log(document)

//não pode usar o - hífem no js

var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

var btnPopup = document.querySelector ('.close-popup')
var bgPopup = document.querySelector('.bg-popup');

// esse console é teste no 'inspecionar do navegador'
// console.log(btnMenu);
// console.log(menu);

//Eventos (são ações geradas pelo )


/*
function boasVindas(){
    alert('olá')
}

//ao clicar no btnMenu, chama afunção "boasVindas"
btnMenu.addEventListener('click', boasVindas)
*/


//ao clicar no btnMenu, chama uma função anônima
btnMenu.addEventListener('click', function(){

    //add ou remove a classe menu-open
    //o toggle add e remove a class que foi adicionada. O classList permite acesso ao toggle
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');

})


menu.addEventListener('click', function(){

    menu.classList.remove('menu-open')
    btnMenu.classList.remove('x');


})

btnPopup.addEventListener('click', function(){
    // bgPopup.classList.add('bg-popup-none')
    bgPopup.style.display = 'none'
})

