const isRotation = (arr1, arr2) => {

    if (arr1.length < 1 || arr2.length < 1 || arr1.length !== arr2.length) {
        return false;
    }

    let j = 0;

    while (j < arr2.length && arr1[0] !== arr2[j]) {
        j++;
    }

    if (j === arr2.length) {
        return false;
    }

    arr1.map((item1, index) => {
        const arr2Indx = (j + index) % arr2.length;
        if (item1 !== arr2[arr2Indx]) {
            return false;
        }

    });

    return true;

}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
const arr3 = [1, 3, 5, 7, 9, 0, 11, 14, 44, 77];
const arr4 = [3, 5, 6, 8, 2, 4, 88, 67, 43, 89];

console.log('result is arr1 arr2 ', isRotation(arr1, arr2));
console.log('result is arr3 arr4 ', isRotation(arr3, arr4));