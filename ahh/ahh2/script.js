// 6.1
function sixOne () {
    for (let i = 55; i < 77; i++) {
        console.log(i);
    }
}

// 6.2
function sixTwo () {
    for (let i = 10; i < 120; i++) {
        i % 2 != 0 ? console.log(i) : null;
    }
}

// 6.3
function sixThree () {
    for (let i = 110; i > 90; i--) {
        console.log(i);
    }    
}

// 6.4
function sixFour () {
    let toys = ['ოვერბორდი', 'პაზლი', 'Lego', 'Yo-yo'];

    for (let i = 0; i < toys.length; i++) {
        i != 0 && i != 3 ? console.log(toys[i]) : null;
    }
}

// 6.5
function sixFive () {
    let toys = ['ოვერბორდი', 'პაზლი', 'Lego', 'Yo-yo'];

    for (let i = 0; i < toys.length; i++) {
        console.log(toys[i]);
    }
}

// 6.6
function sixSix () {
    let arr = [2, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

// 6.7
function sixSeven () {
    let i = 10;
    while (i < 30) {
        console.log(i);
        i++;
    }
}

// 6.8
function sixEight () {
    let i = 1;
    while (i < 10) {
        console.log(i**2);
        i++;
    }
}

// 6.9
function sixNine () {
    let arr = [2, 2, 3, 4, 5];

    for (let i = 0; i < arr.length; i++) {
        arr[i] % 2 == 0 ? console.log(arr[i]) : null;
    }
}

// 6.10
function sixTen () {
    let arr = [1, 77, 9, 17, 4, 3, 9, 8, 20];

    for (let i = 0; i < arr.length; i++) {
        arr[i] > 5 && arr[i] < 10 ? console.log(arr[i]) : null;
    }
}

// 6.11
function sixEleven () {
    let object = {a: 7, b: 8, c: 15, d: 20, e: 55};

    for (let i in object) {
        console.log(object[i])
    }
}

// 6.12
function sixTwelve () {
    
}