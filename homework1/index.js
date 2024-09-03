let objectArray = [
    {
        name: "Nick",
        lastName: "Baratashvili",
        age: 17,
        epxerience: 5,
        salary: 500
    },
    {
        name: "Sandro",
        lastName: "Shiblaze",
        age: 26,
        epxerience: 4,
        salary: 500,
        adult: true
    },
    {
        name: "Giorgi",
        lastName: "Goshadze",
        age: 12,
        epxerience: 6,
        salary: 500
    }
];

function negativesInArray(array) {
    return array.some(x => x < 0);
}

function wordStartsWithA(array) {
    return array.some(x => x.startsWith('A'));
}

function filterArray(objArr) {
    return objArr.filter(x => x.name.startsWith("N"))
}

function allNumbersInArray(array) {
    return array.every(x => typeof (x) === "number");
}

function everyStringIsCapital(array) {
    return array.every(x => x[0] === word[0].toUpperCase());
}

function everyObject(objArr) {
    return objArr.every(x => x.name === "John");
}

function noSquareSquare(arrayFrom) {
    let arrayTo = arrayFrom.map(x => Math.pow(x, 2));
    return arrayTo;
}

function addObjectProperty(objArray) {
    for (let i = 0; i < objArray.length; i++) {
        objArray[i]['fullname'] = `${objArray[i].name} ${objArray[i].lastName}`;
    }

    return objArray;
}

function lowercaseObjectArray(objArr) {
    for (const person of objArr) {
        for (const key in person) {
            if (person.hasOwnProperty.call(person, key)) {
                if (typeof (person[key]) === "string") {
                    person[key] = person[key].toLowerCase();
                }
            }
        }
    }

    return objArr;
}

function everyArrElement(arr) {
    arr.forEach(element => {
        console.log(element);
    });
};


function incrementEachArrayElementBy(arr, incrementSize) {
    return arr.map(x => x += 1);
}

function sallaryIncrease(objArr, amount) {
    for (const person of objArr) {
        if (person.epxerience >= 5) {
            person.salary += amount;
        }
    }

    return objArr;
}

function onlyEvens(oddArray) {
    return oddArray.filter(x => x%2 == 0);
}

function hasProperty(objArray, propertyName) {
    return objArray.filter(x => `${propertyName}` in x);
}

function propertyInRange(objArray, min, max) {
    return objArray.filter(x => x.age >= min && x.age <= max);
}

