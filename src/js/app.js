document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    darkMode();
})
function darkMode(){
    const preferDM = window.matchMedia('(prefers-color-scheme: dark)')
    if(preferDM){
        document.body.classList.add('darkMode')
    }
    preferDM.addEventListener('change', function(){
        if(preferDM){
            document.body.classList.add('darkMode')
        }else{
            document.body.classList.remove('darkMode')
        }
    })
    const buttonDarkMode = document.querySelector('.dark__mode--button')
    buttonDarkMode.addEventListener('click', function(){
        document.body.classList.toggle('darkMode')
    })
}
function eventListeners(){
    const mobileMenu = document.querySelector('.mobile__menu')
    mobileMenu.addEventListener('click',navigationResponsive)
}
function navigationResponsive(){
    const navigationMobile = document.querySelector('.navigation__mobile')
    navigationMobile.classList.toggle('show')
}