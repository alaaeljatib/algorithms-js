const insertionSort = (arr) => {
    if (!arr || (arr && arr.length < 2)) return arr;

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i];

        for (let j = i; j > -1; j--) {
            if (key < arr[j]) {
                arr.splice(j + 1, 1);
                arr.splice(j, 0, key);
            }

        }
    }

    return arr;
}

const arr = [100, 3, -2, 5, 8, -7 /*, 6, 1, 12, -14, 30, 21, 45, 7, -5, 90, 10, 9*/ ]

console.log('sorted Array is ', insertionSort(arr));