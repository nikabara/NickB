let sidebar_toggler = document.getElementById("sidebar-toggle-btn");
let sidebar = document.getElementById("sidebar");
let menu_arrow = document.getElementById("menu-arrow");


let toggled = false;
sidebar_toggler.onclick = () => {
    toggled = !toggled;
    if (toggled) {
        sidebar.style.transform = "translateX(0%)";
        menu_arrow.style.transform = "rotate(180deg)";
        menu_arrow.style.marginBottom = "22px";

    }
    else {
        sidebar.style.transform = "translateX(-100%)";
        menu_arrow.style.transform = "rotate(0deg)";
        menu_arrow.style.marginBottom = "0";
    }
}

window.onclick = (args) => {
    console.log(args.target.id);

    if (toggled && args.target.tagName !== "I" && args.target.id !== "menu-arrow") {
        sidebar.style.transform = "translateX(-100%)";
        menu_arrow.style.transform = "rotate(0deg)";
        menu_arrow.style.marginBottom = "0";
        toggled = false;
    }
}