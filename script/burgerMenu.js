let btnBurger = document.querySelector('.btnBurger'),
menu = document.querySelector('.burgerMenu');


btnBurger.addEventListener('click', function(){
    btnBurger.classList.toggle('active');
    menu.classList.toggle('active');
})

