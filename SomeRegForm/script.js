const PROGRAMMER_IMG = "https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg";
const DESIGNER = "https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"

let fullname = prompt("Your fullname : ");
let proffesion = prompt("Proffesion (Designer/Programmer) : ").toLowerCase();
let csGrade = Number(prompt("C# exam grade : "));
let pyGrade = Number(prompt("PY exam grade : "));
let jsGrade = Number(prompt("JS exam grade : "));

const GetGrade = (grade1, grade2, grade3) => {
    let ovrGrade = (grade1 + grade2 + grade3) / 3;

    if (ovrGrade >= 90) {
        return "A";
    }
    else if (ovrGrade >= 80 && ovrGrade < 90){
        return "B";
    }
    else if (ovrGrade >= 70 && ovrGrade < 80){
        return "C";
    }
    else if (ovrGrade >= 51 && ovrGrade < 70){
        return "D";
    }
    else if (ovrGrade < 51){
        return "F";
    }
}

const GetImage = (proffesion) => {
    if (proffesion == "programmer") {
        return PROGRAMMER_IMG;
    }
    else{
        return DESIGNER;
    }
}

document.querySelector("img").src = GetImage(proffesion);
document.querySelector(".fullname").innerText = "Your name is : " + fullname;
document.querySelector(".grade").innerText = "Your grade : " + GetGrade(csGrade, pyGrade, jsGrade);