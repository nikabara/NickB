let loader = document.getElementById("loader");
let loaderLogo = document.getElementById("loader-logo");



window.onload = (event) => {
    playLoader();
}

const playLoader = () => {
    loaderLogo.style.opacity = "1";
    setTimeout(() => {
        loaderLogo.style.opacity = "0";

        setTimeout(() => {
            loader.style.opacity = "0";
        }, 400);
    }, 2000);
}