let timer = document.getElementById("countdown-timer"); 

let hr = 24; // Timer hours
const min = 0; // Timer minutes
const sec = 0; // Timer seconds

var hours = hr * 3600000; // Timer hours in mili-seconds
var minutes = min * 60000; // Timer hours in mili-seconds
var seconds = sec * 1000; // Timer seconds in mili-seconds

const setTime = hours + minutes + seconds; // Timer tottal time 
const startTime = Date.now(); // Current real time

const futureTime = startTime + setTime; // Tottal time of timer running

const countDownTimer = () => {
    const currentTime = Date.now(); // Present time on every function itteration
    const remainingTime = futureTime - currentTime; // Delta of future and current time (real countdown time)

    // Converting mili-second equivalent time units back to original form
    // .toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false} adds extra 0 to single digit numbers
    // for example in turns 0 : 0 : 1 into 00 : 00 : 01
    const hrs = Math.floor((remainingTime / (1000 * 60 * 60)) % 24).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    const mins = Math.floor((remainingTime / (1000 * 60)) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
    const secs = Math.floor((remainingTime / 1000) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});

    timer.innerText = `${hrs} : ${mins} : ${secs}`; // Display countdwon time to web-page

    if (remainingTime < 0) { 
        clearInterval(timerLoop); // Stops countdown
        timer.innerText = `00 : 00 : 00`; // Displays 00 : 00 : 00 on web-page when countdwon is over instead of -1 : -1 : -1
    }
}

// Initialising countdwon itteration
const timerLoop = setInterval(countDownTimer);
countDownTimer();