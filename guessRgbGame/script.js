let easy = document.getElementById("mode-ease");
let hard = document.getElementById("mode-hard");
let refresh = document.querySelector(".refresh");
let rgbText = document.querySelector(".rgb-text");

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

function modeEasy() {
    currentMode = "easy";

    let hardBoxes = document.querySelectorAll(".hard");
    hardBoxes.forEach(element => {
        element.style.display = "none";
    });

    const colorArray = generateRandomColor2DArray();

    rgbText.innerText = chooseRandomColor(colorArray, 'easy')[0].toUpperCase();

    let easyBoxes = document.querySelectorAll(".easy");
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

    const colorArray = generateRandomColor2DArray();

    rgbText.innerText = chooseRandomColor(colorArray, 'hard')[0].toUpperCase();

    let allColorBoxes = document.querySelectorAll(".color-box");

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
    Swal.fire({
        title: "HaHAAAAA bro really used this button XDDD",
        imageUrl: "https://images-cdn.ubuy.co.id/634e8e9f6ff8b20d0674b386-distorted-laughing-emoji-sticker-decal.jpg",
        imageHeight: 300
    }).then((result) => {
        Toast.fire({
            title: "Just click the same mode again to refresh =)"
        })
    });

    if (currentMode === "easy") {
        modeEasy();
    }
    else {
        modeHard();
    }
}

easy.addEventListener("click", modeEasy);
hard.addEventListener("click", modeHard);
refresh.addEventListener("click", refreshColors);

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
            
            switch (currentMode) {
                case 'easy':
                    modeEasy();
                    break;
                case 'hard':
                    modeHard();

                default:
                    break;
            }
        }
        else {
            element.style.backgroundColor = "#232323";
            element.style.boxShadow = "none";
            Toast.fire({
                icon: "error",
                title: "Nope... try again",
            })
        }
    }
});
