let easy = document.getElementById("mode-ease");
let hard = document.getElementById("mode-hard");
let refresh = document.querySelector(".refresh");
let rgbText = document.querySelector(".rgb-text");
let hint = document.querySelector(".hint");
let easyBoxes = document.querySelectorAll(".easy");
let allColorBoxes = document.querySelectorAll(".color-box");

let currentMode = 'easy';

window.onload = () => {
    easy.classList.add('button-focused');
    modeEasy();
}

// returns 2D array [,] of alike components"RGB(200,200,200)": [200,200,200]
function generateRandomColor2DArray() {
    let colorArray = [];
    for (let i = 0; i < 6; i++) {
        let rgbArray = [];
        for (let j = 0; j < 3; j++) {
            rgbArray.push(Math.floor(Math.random() * 255));
        }
        colorArray[i] = [`rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`, rgbArray]
    }

    return colorArray;
}

function chooseRandomColor(colorArray, difficulty) {
    if (difficulty.toLowerCase() === "easy") {
        return colorArray.slice(0, 3)[Math.floor(Math.random() * colorArray.slice(0, 3).length)];
    }
    else if (difficulty.toLowerCase() === "hard") {
        return colorArray[Math.floor(Math.random() * colorArray.length)];
    }
}

let colorArray = generateRandomColor2DArray();

function modeEasy() {
    currentMode = "easy";

    let hardBoxes = document.querySelectorAll(".hard");
    hardBoxes.forEach(element => {
        element.style.display = "none";
    });

    rgbText.innerText = chooseRandomColor(colorArray, 'easy')[0].toUpperCase();

    for (let i = 0; i < easyBoxes.length; i++) {
        easyBoxes[i].style.backgroundColor = colorArray[i][0];
    }
}

function modeHard() {
    currentMode = "hard";

    let hardBoxes = document.querySelectorAll(".hard");
    hardBoxes.forEach(element => {
        element.style.display = "block";
    });

    rgbText.innerText = chooseRandomColor(colorArray, 'hard')[0].toUpperCase();

    for (let i = 0; i < allColorBoxes.length; i++) {
        allColorBoxes[i].style.backgroundColor = colorArray[i][0]
    }
}

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
});

function refreshColors() {
    allColorBoxes.forEach(box => {
        box.childNodes[0].style.backgroundColor = 'transparent';
    });

    colorArray = generateRandomColor2DArray();

    if (currentMode === "easy") {
        modeEasy();
    }
    else {
        modeHard();
    }
}

function boostColor (r, g, b) {
    if (r > g && r > b) {
        return 'r';
    }
    else if (g > r && g > b) {
        return 'g';
    }
    else if (b > r && b > g) {
        return 'b';
    }

    throw new Error("idk wtf just happened");
}

function hintColor (colorArray) {
    let rgbArray = [];

    colorArray.forEach(element => { rgbArray.push(element[1]); });

    let boost = currentMode == 'easy' ? 75 : 50;
    let decrease = currentMode == 'easy' ? 65 : 40;

    let guessRgb = rgbText.innerText.replace(/[^\d,]+/g, '').split(',').map(x => x = parseInt(x));
    let whichToBoost = boostColor(guessRgb[0], guessRgb[1], guessRgb[2]);

    allColorBoxes.forEach(box => {
        let currentRgb = box.style.backgroundColor.replace(/[^\d,]+/g, '').split(',').map(x => x = parseInt(x));
        if (currentRgb[0] != guessRgb[0] && currentRgb[1] != guessRgb[1] && currentRgb[2] != guessRgb[2]) {
            switch (whichToBoost) {
                case 'r':
                    box.childNodes[0].style.backgroundColor = `rgb(${currentRgb[0] - decrease}, ${currentRgb[1] + boost}, ${currentRgb[2] + boost})`;
                    break;
                case 'g':
                    box.childNodes[0].style.backgroundColor = `rgb(${currentRgb[0] + boost}, ${currentRgb[1] - decrease}, ${currentRgb[2] + boost})`;
                    break;
                case 'b':
                    box.childNodes[0].style.backgroundColor = `rgb(${currentRgb[0] + boost}, ${currentRgb[1] + boost}, ${currentRgb[2] - decrease})`;
                    break;
            
                default:
                    break;
            }
        }
    });
    
}

easy.addEventListener("click", modeEasy);
hard.addEventListener("click", modeHard);
refresh.addEventListener("click", refreshColors);
hint.addEventListener("click", () => hintColor(colorArray));

document.querySelectorAll("button").forEach(button => {
    button.onclick = () => {
        document.querySelectorAll("button").forEach(x => x.classList.remove("button-focused"));
        button.classList.add("button-focused");
    }
});

document.querySelectorAll(".color-box").forEach(element => {
    element.onclick = () => {
        if (element.style.backgroundColor === rgbText.innerText.toLowerCase()) {
            Toast.fire({
                icon: "success",
                title: "Yeah you got it",
            });
            
            colorArray = generateRandomColor2DArray();

            switch (currentMode) {
                case 'easy':
                    modeEasy();
                    break;
                case 'hard':
                    modeHard();

                default:
                    break;
            }

            allColorBoxes.forEach(box => {
                box.childNodes[0].style.backgroundColor = 'transparent';
            });
        }
        else {
            element.style.backgroundColor = "#232323";
            element.childNodes[0].style.backgroundColor = 'transparent'
            element.style.boxShadow = "none";
            Toast.fire({
                icon: "error",
                title: "Nope... try again",
            })
        }
    }
});
