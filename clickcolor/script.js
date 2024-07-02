window.onload = () => {

}

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
}
document.getElementById("change-color").addEventListener("click", changeColor);