let scrollbar = document.getElementById("scrollbar-top");
let scrollbar_thumb = document.getElementById("scrollbar-top-thumb");


// window.addEventListener("scroll", () => {
//     const currentScrollHeight = document.documentElement.scrollTop;
//     var br = window.innerHeight / 15;
//     var shesh = Math.floor(document.body.getBoundingClientRect().top);
 
//     console.log(currentScrollHeight);
// });

let bodyHeight = document.body.scrollHeight;
let htmlHeight = document.documentElement.scrollHeight;
let height = Math.max(bodyHeight, htmlHeight);
var size = 0;

document.addEventListener("wheel", (event) => {
    const delta = event.deltaY || event.detail || event.wheelDelta;
    const pixelsPerScroll = Math.abs(delta); 
    size += height / pixelsPerScroll
    scrollbar_thumb.style.width = `${size}%`;
    if (size > 100) {
        size == 100;
    }
    if (size < 0) {
        size == 0;
    }
    console.log(size);
});