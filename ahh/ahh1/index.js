function random(minRange, maxRange) {
    return Math.round(Math.random() * maxRange) - minRange;
}

let rndNum = random(0, 100);
console.log(rndNum);

while (true) {
    let userInput = Number(prompt("Your number : "));

    if (userInput.length != 0 && !isNaN(userInput)) {
        if (userInput > rndNum) {
            alert("number too high");
            console.log(userInput);
        }
        else if (userInput < rndNum && userInput >= 0) {
            alert("Number too low");
            console.log(userInput);
        }
        else if (userInput < 0) {
            alert("WHERE THE ACTUALY FUCK ARE U GOING?");

        }
        else {
            alert("congrats you won, number was : " + rndNum.toString());
            document.body.style.backgroundImage = "url(https://becauseiamuniquelyandwonderfullymade.com/wp-content/uploads/2013/10/dsc07961-b-copy.jpg?w=816)";
            break;
        }
    }
}