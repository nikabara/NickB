// let dateInput = document.getElementById("date-input");
let timeBoxes = document.querySelectorAll(".times");

let dateEnd = new Date("09-15-2024 18:40:50");

function convertToTimerFormat(date_end) {
    let dateNow = new Date();
    let ms = dateEnd - dateNow;

    const MS_IN_SECOND = 1000;
    const SECONDS_IN_MINUTE = 60;
    const MINUTES_IN_HOUR = 60;
    const HOURS_IN_DAY = 24;
    
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(ms / (MS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY));
    ms %= MS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;

    const hours = Math.floor(ms / (MS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR));
    ms %= MS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR;

    const minutes = Math.floor(ms / (MS_IN_SECOND * SECONDS_IN_MINUTE));
    ms %= MS_IN_SECOND * SECONDS_IN_MINUTE;

    const seconds = Math.floor(ms / MS_IN_SECOND);

    timeBoxes[0].innerText = days.toString();
    timeBoxes[1].innerText = hours.toString().padStart(2, '0');
    timeBoxes[2].innerText = minutes.toString().padStart(2, '0');
    timeBoxes[3].innerText = seconds.toString().padStart(2, '0');
}

convertToTimerFormat(dateEnd);

setInterval(convertToTimerFormat, dateEnd, 1000);

