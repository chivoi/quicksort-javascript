export const quickSort = (array) => {
    let result;
    // base case
    if (array.length <= 1) {
        return array;
    }

    // recursive case
    let pivotValue = array[Math.floor(array.length / 2)];
    result = partition(array, pivotValue);
    return [quickSort(result[0]), pivotValue, quickSort(result[2])].flat();
}

console.log(quickSort([34, 1, 90, 4, 2, 50]));


// helpers

export function swap(first, second) {
    if (first >= second) {
        let temp = first;
        first = second;
        second = temp;
    }
    return [first, second];
}

export function partition(array, pivot) {
    let lessThanPivot = [];
    let greaterThanPivot = [];
    array.forEach(i => {
        if (i < pivot) lessThanPivot.push(i);
        if (i > pivot) greaterThanPivot.push(i);
    });
    return [lessThanPivot, pivot, greaterThanPivot];
}