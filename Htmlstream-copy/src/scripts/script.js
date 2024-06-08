const changingText = document.querySelector(".main__slogan");

const CHANGING_TEXT_BASE = "Free Bootstrap";

let i = 0;
let wordArray = ["UI Kits", "Themes" , "Snippets", "and more.."];

let tempWord = "";
const ChangeText = (word) => {
    if (i < word.length){
        tempWord = word[i];
        changingText.textContent += tempWord;
        i++;
        setTimeout(ChangeText(tempWord), 1000);
    }
}

wordArray.forEach(word => {
    tempWord = ""
    ChangeText(word);
});
