let array = [9, 7, 8, 1, 0, -1, 4, 6, 2, 3, 5];

function insertionSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[min] > array[j]) {
                min = j;
            }
        }

        let temp = array[i];
        array[i] = array[min];
        array[min] = temp; 
    }

    return array;
}

console.log(insertionSort(array));