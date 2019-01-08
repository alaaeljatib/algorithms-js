const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    const pivot = arr[0];
    const smallerArray = arr.filter((item) => (item < pivot));
    const equalArray = arr.filter((item) => (item === pivot));
    const largerArray = arr.filter((item) => (item > pivot));

    return quickSort(smallerArray).concat(equalArray).concat(quickSort(largerArray));

}


const arr = [6, 55, 90, -1, 12, 2, 14, -5, 33, 6, 0, 123, 2, 3, -23, 6, 8, 3, 1, 6]


console.log('sorted array is ', quickSort(arr), arr.length, quickSort(arr).length);