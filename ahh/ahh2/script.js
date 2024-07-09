// 6.1
function sixOne() {
    for (let i = 55; i < 77; i++) {
        console.log(i);
    }
}

// 6.2
function sixTwo() {
    for (let i = 10; i < 120; i++) {
        i % 2 != 0 ? console.log(i) : null;
    }
}

// 6.3
function sixThree() {
    for (let i = 110; i > 90; i--) {
        console.log(i);
    }
}

// 6.4
function sixFour() {
    let toys = ['ოვერბორდი', 'პაზლი', 'Lego', 'Yo-yo'];

    for (let i = 0; i < toys.length; i++) {
        i != 0 && i != 3 ? console.log(toys[i]) : null;
    }
}

// 6.5
function sixFive() {
    let toys = ['ოვერბორდი', 'პაზლი', 'Lego', 'Yo-yo'];

    for (let i = 0; i < toys.length; i++) {
        console.log(toys[i]);
    }
}

// 6.6
function sixSix() {
    let arr = [2, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// 6.7
function sixSeven() {
    let i = 10;
    while (i < 30) {
        console.log(i);
        i++;
    }
}

// 6.8
function sixEight() {
    let i = 1;
    while (i < 10) {
        console.log(i ** 2);
        i++;
    }
}

// 6.9
function sixNine() {
    let arr = [2, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 == 0 ? console.log(arr[i]) : null;
    }
}

// 6.10
function sixTen() {
    let arr = [1, 77, 9, 17, 4, 3, 9, 8, 20];

    for (let i = 0; i < arr.length; i++) {
        arr[i] > 5 && arr[i] < 10 ? console.log(arr[i]) : null;
    }
}

// 6.11
function sixEleven() {
    let object = { a: 7, b: 8, c: 15, d: 20, e: 55 };

    for (let i in object) {
        console.log(object[i])
    }
}

// 6.12
function sixTwelve(min, max) {
    let sum = 0;
    for (let i = min; i < max; i++) {
        i % 2 == 0 ? sum += i : null;
    }
    return sum;
}

// 6.13
function sixThirteen(min, max) {
    let mult = min;
    for (let i = min; i < max; i++) {
        mult += mult * i;
    }
    return mult;
}

// 6.14 (aq ver mivxvdi ra unda meqna da stringi ricxvebis tanmimdevrobit davalage da ise davabrune) -> '2468101214'
function sixFourteen(string) {
    let arr = [];
    for (let i = 0; i < string.length; i++) {
        arr[i] = Number(string[i]);
    }
    arr.sort();
    return arr.toString().split('').filter(char => char != ',').join('');
}

// 6.15 -> "-11-10-9-8-7-6-5-4-3-"
function sixFifteen(string) {
    let arr = string.split('-').filter(char => char != "").map(char => Number(char)).sort((a, b) => a - b);
    return arr;
}

// 6.16 -> sixSixteen(50, 500, 4);
function sixSixteen(min, max, target) {
    for (let i = min; i < max; i++) {
        sum = Number(i.toString()[0]) + Number(i.toString()[1]);
        sum == target ? console.log(i) : null;
    }
}

// 6.17 -> console.log(sixSeventeen([10.8, 7.227, 9, 17.34, 10.34, 3, 7.9, -8, 20, 100, 77,345.67]));
function sixSeventeen(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            return sum;
        }
        sum += array[i];
    }
}

// 5.18 -> console.log(fiveEighteen(["hello", "my", "name", "is", "nick"], "nick"))
function fiveEighteen(array, target) {
    if (!array.includes(target)) {
        return null;
    }

    return array.indexOf(target);
}

// 5.19 -> console.log(fiveNineteen(1, 200));
function fiveNineteen(start, end) {
    let sum = 0;
    let count = 0;
    let number = start;
    while (sum < end) {
        sum += number;
        number++;
        count++;
    }
    return count;
}

// 5.20 -> 4-jer daibechdeba parametri 'a'
function fiveTwenty() {
    for (let a = 1; a <= 4; a++) {
        for (let b = 1; b <= 2; b++) {
            console.log(a);
        }
    }
}

// 5.21 -> console.log(fiveTwentyOne([[128, 52, 6, 76, 200],[95, 36, 2, 44, 300],[2, 4, 7, 9, 2]]));
function fiveTwentyOne(matrix) {
    let matrixRowSum = [];

    for (let r = 0; r < matrix.length; r++) {
        let sumOfRow = 0;
        for (let c = 0; c < matrix[r].length; c++) {
            sumOfRow += matrix[r][c];
        }
        matrixRowSum[r] = sumOfRow;
    }

    return matrixRowSum;
}

// 5.22 -> num is not defined because it's lifespan ends in for(i) loop braces. Has [&'static] lifespan type
function fiveTwentyTwo() {
    for (let i = 0; i <= 9; i++) {
        let num = 3;
        for (let j = 0; j <= 9; j++) {
        }
    }
    console.log(num)
}

// 5.23 -> console.log(fiveTwentyThree(20, 40))
function fiveTwentyThree(min, max) {
    let arr = [];
    for (let i = min; i < max; i++) {
        arr.push(i);
    }
}

// 5.24 -> console.log(fiveTwentyFour([1, -77, 9, 17, -4, 3, 9, -8, 20]))
function fiveTwentyFour(array) {
    let arr = array.filter(num => num > 0);
    return arr;
}

// 5.25 -> console.log(fiveTwentyFive([10.8, 7.227, 9, 17.34, 10.34, 3, 7.9, -8, 20, 100, 77, 345.67]))
function fiveTwentyFive(array) {
    array.map(num => console.log(num ** 2));
}

// 5.26
function fiveTwentySix1() {
    let obj = {};
    let keys = ['ორ.', 'სამშ.', 'ოთხ.', 'ხუთ.', 'პარ.', 'შაბ.', 'კვ.'];
    let values = [1, 2, 3, 4, 5, 6, 7];

    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = values[i];
    }

    return obj;
}

function fiveTwentySix2() {
    let keys = ['ორ.', 'სამშ.', 'ოთხ.', 'ხუთ.', 'პარ.', 'შაბ.', 'კვ.'];
    let values = [1, 2, 3, 4, 5, 6, 7];

    let matrix = [];
    for (let i = 0; i < keys.length; i++) {
        matrix.push([keys[i], values[i]]);
    }

    return Object.fromEntries(matrix);
}

// 5.27
function fiveTwentySeven() {
    let cars = {
        BMW: 'შავი',
        Mercedes: 'ვერცხლისფერი',
        Nissan: 'შავი',
        Ford: 'წითელი',
        Toyota: 'შავი'
    };

    let blackCars = {};

    for (let i = 0; i < Object.entries(cars).length; i++) {
        const element = Object.entries(cars)[i];
        if (element[1] == "შავი") {
            blackCars[element[0]] = element[1];
        }
    }

    return blackCars;
}

// 5.28
function fiveTwebtyEight() {
    const date = new Date(); // experiment by modding value of Date for example -> ...new Date("July 6");
    let dayNumber = date.getDay();

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    if (dayNumber == 6 || date.getDay() == 0) {
        document.body.innerText = `${weekday[dayNumber]} : resting day`;
    }
    else {
        document.body.innerText = `${weekday[dayNumber]} : working day`;
    }
}

// 5.29
function fiveTwebtyNine() {
    const date = new Date(); // experiment by modding value of Date for example -> ...new Date("July 9");
    let monthNumber = date.getMonth();

    let months = [
        'იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი',
        'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'
    ];

    document.body.innerText = months[monthNumber];
}


function one() {
    let str1 = "Jave";
    let str2 = "Script";
    return str1 + str2;
}

function two() {
    let str1 = 'და';
    let str2 = 'იყო';
    return `იყო ${str1} არა ${str2} რა`;
}

function three() {
    let name = "A fucking GEORGE";
    return name.split(" ")[2][0];
}

function four() {
    let text = "პარიზი საფრანგეთის დედაქალაქია";
    return text[text.length - 1];
}

function five() {
    let capital = "XPARIS";
    return capital.split(1, capital.length - 1);
}

function six() {
    let inp = prompt("Wasgood G wazyo shanka? : ");
    alert(`Wazaaaa shwanka ma ${inp} dwinga`);
}

function seven() {
    let person = prompt("გთხოვთ შეიყვანოთ თქვენი სხელი:", "");
    alert(`Wazaaa ${person}`);
}

function eight() {
    let name = "nika";
    let lastname = "baratashvili";
    document.body.innerText = `Cpmpetition was won byyyy.. ${name} ${lastname}`;
}

function nine() {
    let str = 'თბილისი საქართველოს დედაქალაქია';
    let firstWord = str.split(" ")[0];
    if (firstWord === "თბილისი") {
        alert("Starts with თბილისი");
    }
    else if (firstWord === "ამსტერდამი") {
        alert("starts with ამსტერდამი");
    }
}

function ten() {
    let year = 1;
    let month = 6;
    alert(`მე it Step
    აკადემიაში პროგრამირება უნდა ვისწავლო ${month} თვის განმავლობაში`);
    alert(`studied for ${year}`);
}

function eleven() {
    let str = 'პარიზი საქართველოს დედაქალაქია';
    alert(str.replace("პარიზი", "თბილისი"));
}

function twelve() {
    let products = 'შოკოლადი, ბანანი, ლიმონათი, ვაშლი';
    return products.split(',');
}

function thirteen() {
    let string = 'Hello world, this is string';
    let f1 = string.substr(0, 5);
    let f2 = string.substring(6, 11);
    let f3 = string.slice(21, string.length);
    console.log(f1, f2, f3);
}

