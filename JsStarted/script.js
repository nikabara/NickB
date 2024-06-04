let toggle = document.querySelector(".main");
let toggled = document.querySelector("ul");

let isToggled = false;
toggle.onclick = () => {
    isToggled = !isToggled;

    if(isToggled){
        toggled.style.display = "block"
    }else{
        toggled.style.display = "none"
    }
}