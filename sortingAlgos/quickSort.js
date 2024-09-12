let array = [9, 7, 8, 1, 0, 4, 6, 2, 3, 5];

function quickSort(array, start, end) {
    if (end <= start) {
        return
    }

    let pivot = partition(array, start, end);

    quickSort(array, start, pivot - 1);
    quickSort(array, pivot + 1, end);
}

function partition(array, start, end) {
    let pivot = array[end];
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
        if (array[j] < pivot) {
            i++;
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    i++;
    let temp = array[i];
    array[i] = array[end];
    array[end] = temp;

    return i;
}

console.log(array, quickSort(array, 0, array.length - 1));