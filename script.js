var mobile = document.getElementById('mobile');
var desktop = document.getElementById('desktop');
var hamburger = document.getElementById('hamburger');
function displayLinks(desktop){
    if(desktop.style.display.value ==='none'){
        desktop.style.display.value = 'block';
        // console.log(desktop.style.display.value)
    } else {
        desktop.style.display.value === 'none';
        // console.log(desktop.style.display.value)
    }
}
function mobileMenu(desktop){
    if(hamburger.src.includes('hamburger')){/*=== '\"images/icon-hamburger.svg\"'*/
        // console.log('if condition works '+ this.src)
        console.log('menu visible');
        hamburger.src = "images/icon-close.svg";
        // displayLinks(desktop);
        desktop.style.display = 'block';

    }else{
        console.log('Menu invisible');
        hamburger.src = "images/icon-hamburger.svg";
        // desktop.style.display = 'hidden';
        // displayLinks();
        desktop.style.display = 'none';
    }
}


hamburger.addEventListener('click', function() {
    mobileMenu(desktop)
}, false);
// hamburger.addEventListener('click', mobileMenu, false);