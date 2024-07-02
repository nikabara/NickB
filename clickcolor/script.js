function changeColor () {
    let divColorArray = [];
    for (let i = 1; i <= 8; i++) {
        let rgbArray = [];

        for (let i = 0; i < 3; i++) {
            rgbArray.push(Math.round(Math.random() * 255));
        }

        let rndRgb = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
        divColorArray.push([`div${i}`, rndRgb]);

        document.getElementById(`div${i}`).style.backgroundColor = rndRgb;
    } 

    document.getElementById("change-color").innerText = divColorArray[Math.round(Math.random() * (divColorArray.length - 1))][1]
    // console.log(document.getElementById("div1").style.backgroundColor);
    // console.log(document.getElementById("change-color").innerText)
}

window.onload = () => {
    changeColor();
}

document.getElementById("change-color").addEventListener("click", changeColor);

document.querySelectorAll(".color-div").forEach(element => {
    console.log(element.style.backgroundColor)
    element.addEventListener("click", () => {
        if (element.style.backgroundColor == document.getElementById("change-color").innerText) {
            element.style.border = "solid green 10px"
            document.querySelector("main").style.pointerEvents = "none";
            setTimeout(() => {
                element.style.border = "none"
                changeColor();
                document.querySelector("main").style.pointerEvents = "auto";
            }, 2000);
        }
        else {
            element.style.border = "solid red 10px"
            document.querySelector("main").style.pointerEvents = "none";
            setTimeout(() => {
                element.style.border = "none"
                changeColor();
                document.querySelector("main").style.pointerEvents = "auto";
            }, 500);
        }
    })
});