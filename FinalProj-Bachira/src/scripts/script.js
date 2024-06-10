let options = document.querySelectorAll(".nav-option");
let home = document.querySelector(".home");

let menuToggler = document.getElementById("menu-toggler");
let burgerMenu = document.querySelector(".burger-menu");

const menuOptionsHover = () => {
    for (let i = 0; i < options.length; i++) {
        options[i].addEventListener("mouseover", () => {
            home.style.color = "#535A56";
        })
        options[i].addEventListener("mouseout", () => {
            home.style.color = "#101913";
        })
    }
}

const menuAutoClose = (responsiveWidth) => {
    if (window.innerWidth > responsiveWidth) {
        console.log(window.innerWidth);
        burgerMenu.classList.remove("burger-toggled");
        document.body.classList.remove("no-scroll")
    }
}


window.onresize = () => {
    menuAutoClose(1000);
}

menuOptionsHover();

menuToggler.onclick = () => {
    burgerMenu.classList.toggle("burger-toggled")
    document.body.classList.toggle("no-scroll")
}