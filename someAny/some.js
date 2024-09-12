function cstSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }

    return false;
}

function cstEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }

    return true;
}

Array.prototype.cstFilter = function(callback) {
    let newArray = [];

    this.forEach(item => {
        if (callback(item)) {
            newArray.push(item);
        }
    });

    return newArray;
}

let array = [1, 5, 8, 7, 9, 4, 5, 6, 1, 4, 7, 5, 2, 1, 9, 8, 6, 4, 3, 2, 58, 9];

// console.log(cstSome(array, (x) => x == 0));

// for (let i = 0; i < array.cstFilter((x) => x%2 == 0).length; i++) {
//     console.log(array.cstFilter((x) => x%2 == 0)[i])
// }

Array.prototype.bubbleSort = function(callback) {
    if (typeof(callback) !== "function") {
        throw new Error("Callback parameter must be a function type : (x) => x == a");
    }

    function swap(i, j) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }

    // Use the local swap function
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (callback(this[j], this[j + 1]) > 0) { // If out of order
                swap.call(this, j, j + 1); // Use call to ensure `this` refers to the array
            }
        }
    }

    return this;
}

for (let i = 0; i < array.bubbleSort((a, b) => a - b).length; i++) {
    console.log(array[i]);
}