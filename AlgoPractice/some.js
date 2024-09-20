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

Array.prototype.cstFilter = function (callback) {
    let newArray = [];

    this.forEach(item => {
        if (callback(item)) {
            newArray.push(item);
        }
    });

    return newArray;
}

let array = [1, 5, 8, 7, 9, 4, 5, 6, 1, 4, 7, 5, 2, 1, 9, 8, 6, 4, 3, 2, 58, 9];

Array.prototype.bubbleSort = function (callback) {
    if (typeof (callback) !== "function") {
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


class MyArray {
    constructor(array, callback, string) {
        this.array = array;
        this.callback = callback;
        this.string = string;
    }

    static min(array) {
        let temp = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < temp) {
                temp = array[i];
            }
        }

        return temp;
    }

    static max(array) {
        let temp = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] > temp) {
                temp = array[i];
            }
        }

        return temp;
    }

    static sum(array, callback) {
        let sum = 0;
        if (typeof callback === "function") {
            for (let i = 0; i < array.length; i++) {
                if (callback(array[i])) {
                    sum += array[i];
                }
            }
        }
        else {
            for (let i = 0; i < array.length; i++) {
                sum += array[i];
            }
        }

        return sum;
    }

    static count(array, callback) {
        if (typeof callback === "function") {
            let count = 0;
            for (let i = 0; i < array.length; i++) {
                if (callback(array[i])) {
                    count++;
                }
            }
        }
        else {
            return array.length;
        }
    }

    static insertionSort(array, callback) {
        for (let i = 1; i < array.length; i++) {
            let temp = array[i];
            let j = i - 1;

            while (j >= 0 && callback(array[j], temp) >= 0) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = temp;
        }
    }

    static reverse(array) {
        let i = 0;
        let j = array.length - 1;

        while (i <= j) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;

            i++; j--;
        }

        return array;
    }
}

class MyString {
    static isPalindrome(string) {
        let i = 0;
        let j = string.length - 1;

        while (i <= j) {
            if (string[i] !== string[j]) {
                return false;
            }
            i++; j--;
        }

        return true;
    }
}

class MyMath {
    static fib(n, array) {
        if (n <= 1) return n;

        return this.fib(n - 1) + this.fib(n - 2);
    }

    static fact(n) {
        if (n === 0 || n === 1) return 1;

        return n * this.fact(n - 1);
    }
}

function main() {
    let array = [7, 8, 4, 6, 59, 7, 2, 3, 1, 8, 7, 0];

}

main();