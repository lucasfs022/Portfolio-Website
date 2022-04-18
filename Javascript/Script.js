function menuShow () {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open')
        document.querySelector('.icon').src = "./Resources/Icons/menu-icon.svg";
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "./Resources/Icons/ham-menu-close.svg";
    }
}

let toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})