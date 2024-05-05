let scrollbar = document.getElementById("scrollbar-top");
let scrollbar_thumb = document.getElementById("scrollbar-top-thumb");


function updateProgress(num1, num2, item){
    var percent = Math.ceil( num1 / num2 * 100 ) + '%';

    item.style.width = percent;
    console.log(percent);

    if(percent == 101 + '%'){
       item.style.width = "100%";
    }
    else if(percent !== 101 + '$'){
        item.style.width = percent;
    }
}

window.addEventListener("scroll", () => {
    var top = window.scrollY;
    var height = document.body.getBoundingClientRect().height - window.innerHeight;

    updateProgress(top, height, scrollbar_thumb);
});
