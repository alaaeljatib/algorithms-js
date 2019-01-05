const insertionSort = (arr) => {
    if (typeof (arr) === 'undefined') {
        return [];
    }

    if (typeof (arr) !== 'undefined' && arr.length < 2) {
        return [];
    }

    let swapper = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) { //swap them!
                swapper = arr[i];
                arr[i] = arr[j];
                arr[j] = swapper;
            }
        }
    }

    return arr;
}

const arr = [4, 23, 2, 23, 0, 44, 1, 33, 2, 65, 3, 99, 6, 12, 11, 10, 5]

console.log('sorted array is >>', insertionSort(arr));