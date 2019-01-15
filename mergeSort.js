const mergeSort = (arr) => {
    if (!arr || (arr && arr.length < 2)) return arr;

    const pivot = Math.round(arr.length / 2);
    const leftArray = arr.slice(0, pivot);
    const rightArray = arr.slice(pivot);

    return mergeSortedArrays(mergeSort(leftArray), mergeSort(rightArray));
}

const mergeSortedArrays = (arr1, arr2) => {
    const combinedArray = []

    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        const value1 = arr1[i];
        const value2 = arr2[j];

        if (value1 > value2) {
            combinedArray.push(value2);
            j++;

        } else if (value1 < value2) {
            combinedArray.push(value1);
            i++;

        } else {
            combinedArray.push(value1);
            combinedArray.push(value2);
            i++;
            j++;
        }
    }

    while (i < arr1.length) {
        combinedArray.push(arr1[i]);

        i++;
    }

    while (j < arr2.length) {
        combinedArray.push(arr2[j]);
        j++;
    }

    return combinedArray;
}

const arr = [4, 23, 2, -3, 23, 0, 44, 1, 33, 2, 65, 3, -2, 99, 6, 12, 11, -12, 10, 5]

console.log('sorted array is >>', mergeSort(arr));