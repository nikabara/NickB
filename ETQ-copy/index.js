let prevCurrentY = 0;
let navbar = document.getElementById("navbar");

addEventListener("scroll", (event) => {
    if (window.scrollY < 90) {
        navbar.classList.remove("active-nav");
        navbar.classList.add("static-nav");
    }
    else if (window.scrollY > 90) {
        navbar.classList.add("active-nav");
        navbar.classList.remove("static-nav");
    }
});