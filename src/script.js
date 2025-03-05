const menuOpen = document.querySelector('#menu');
const nav = document.querySelector('nav');
const menuClose = document.querySelector('#menu-close');
const overlay = document.querySelector('#overlay');
const menuLG = document.querySelector('#menu-lg');
const noOverlay = document.querySelector('#SNKRS');

menuOpen.addEventListener('click', function(){
    nav.classList.add('nav-active');
    overlay.classList.add('overlay-active');
})

menuClose.addEventListener('click', function(){
    nav.classList.remove('nav-active');
    overlay.classList.remove('overlay-active');
})

overlay.addEventListener('click', function(){
    nav.classList.remove('nav-active');
    overlay.classList.remove('overlay-active');
})

menuLG.addEventListener('mouseenter', function () {
    overlay.classList.add('overlay-active-lg');
});

menuLG.addEventListener('mouseleave', function () {
    overlay.classList.remove('overlay-active-lg');
});

noOverlay.addEventListener('mouseenter', function () {
    overlay.classList.remove('overlay-active-lg');
});

noOverlay.addEventListener('mouseleave', function () {
    overlay.classList.add('overlay-active-lg');
});


const searchMenu = document.querySelector('#search-menu');
const searchOpen = document.querySelector('#search');
const searchClose = document.querySelector('#cancel-search');
const searchLgMenu = document.querySelector('#search-lg-menu');

searchOpen.addEventListener('click', function(){
    searchMenu.classList.add('search-menu-active');
})

searchLgMenu.addEventListener('click', function(){
    searchMenu.classList.add('search-menu-active');
    overlay.classList.add('overlay-active');
})

searchClose.addEventListener('click', function(){
    searchMenu.classList.remove('search-menu-active');
    overlay.classList.remove('overlay-active');
})


const footerMenu1 = document.querySelector('#menu-1');
const menu1 = document.querySelector('#fmenu-1');
const arrow1 = document.querySelector('#farrow1');
const footerMenu2 = document.querySelector('#menu-2');
const menu2 = document.querySelector('#fmenu-2');
const arrow2 = document.querySelector('#farrow2');
const footerMenu3 = document.querySelector('#menu-3');
const menu3 = document.querySelector('#fmenu-3');
const arrow3 = document.querySelector('#farrow3');

function closeAllMenus() {
    menu1.classList.remove('fmenu-1-active');
    arrow1.classList.remove('farrow1-active');
    footerMenu1.classList.remove('menu-1-active');

    menu2.classList.remove('fmenu-2-active');
    arrow2.classList.remove('farrow2-active');
    footerMenu2.classList.remove('menu-2-active');

    menu3.classList.remove('fmenu-3-active');
    arrow3.classList.remove('farrow3-active');
    footerMenu3.classList.remove('menu-3-active');
}

footerMenu1.addEventListener('click', function(){
    event.preventDefault();

    const isOpen = menu1.classList.contains('fmenu-1-active');
    closeAllMenus(); 

    if (!isOpen) { 
            menu1.classList.add('fmenu-1-active');
            arrow1.classList.add('farrow1-active');
            footerMenu1.classList.add('menu-1-active');
        }
})

footerMenu2.addEventListener('click', function(){
    event.preventDefault();

    const isOpen = menu2.classList.contains('fmenu-2-active');
    closeAllMenus(); 

    if (!isOpen) { 
        menu2.classList.add('fmenu-2-active');
        arrow2.classList.add('farrow2-active');
        footerMenu2.classList.add('menu-2-active');
    }
})

footerMenu3.addEventListener('click', function(){
    event.preventDefault();

    const isOpen = menu3.classList.contains('fmenu-3-active');
    closeAllMenus(); 

    if (!isOpen) { 
            menu3.classList.add('fmenu-3-active');
            arrow3.classList.add('farrow3-active');
            footerMenu3.classList.add('menu-3-active');
        }
})

document.getElementById("menu").addEventListener("click", function () {
    window.scrollTo({ top: 0 });

    document.body.style.overflow = "hidden";

    document.querySelector("nav").style.overflowY = "auto";
});

document.getElementById("menu-close").addEventListener("click", function () {
    document.body.style.overflow = "auto";
    
    document.querySelector("nav").style.overflowY = "hidden";
});

document.getElementById("menu").addEventListener("click", function () {
    let menu = document.querySelector("nav");
    menu.style.maxHeight = window.innerHeight + "px"; 
    menu.style.overflowY = "auto"; 
});


searchOpen.addEventListener("click", function () {

    window.scrollTo({ top: 0 });

    document.body.style.overflow = "hidden";

    searchMenu.style.overflowY = "auto";

    searchMenu.classList.add("search-menu-active");
});

searchClose.addEventListener("click", function () {
    
    document.body.style.overflow = "auto";

    searchMenu.style.overflowY = "hidden";

    searchMenu.classList.remove("search-menu-active");
});

searchLgMenu.addEventListener("click", function () {
    
    window.scrollTo({ top: 0, behavior: "smooth" });

    document.body.style.overflow = "hidden";

    searchMenu.style.overflowY = "auto";

    searchMenu.classList.add("search-menu-active");
});

searchClose.addEventListener("click", function () {

    document.body.style.overflow = "auto";

    document.body.style.overflowX = "hidden";

    searchMenu.style.overflowY = "hidden";

    searchMenu.classList.remove("search-menu-active");
});

overlay.addEventListener('click', function(){
    searchMenu.classList.remove('search-menu-active');

    document.body.style.overflow = "auto";

    document.body.style.overflowX = "hidden";
})



document.addEventListener("DOMContentLoaded", function () {
    // Mencegah overscroll horizontal
    document.documentElement.style.overscrollBehaviorX = "none";
    document.body.style.overscrollBehaviorX = "none";

    // Blokir swipe horizontal di seluruh halaman
    window.addEventListener("touchmove", function (event) {
        if (Math.abs(event.touches[0].clientX - event.touches[0].screenX) > 10) {
            event.preventDefault();
        }
    }, { passive: false });

    // Jika halaman ter-scroll horizontal, paksa kembali ke kiri
    window.addEventListener("scroll", function () {
        if (window.scrollX > 0) {
            window.scrollTo(0, window.scrollY);
        }
    });

    // Blokir swipe horizontal sebelum terjadi (di mobile)
    window.addEventListener("touchstart", function (event) {
        if (event.touches.length === 1) {
            let touch = event.touches[0];
            let startX = touch.clientX;

            window.addEventListener("touchmove", function moveHandler(e) {
                let moveX = e.touches[0].clientX;
                let diffX = moveX - startX;

                if (Math.abs(diffX) > 10) {
                    e.preventDefault(); // Blokir swipe horizontal
                }

                window.removeEventListener("touchmove", moveHandler);
            }, { passive: false });
        }
    });
});












