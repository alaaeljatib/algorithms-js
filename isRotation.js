const isRotation = (arr1, arr2) => {

    if (arr1.length < 1 || arr2.length < 1 || arr1.length !== arr2.length) {
        return false;
    }

    let key_j = -1;

    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] === arr1[0]) {
            key_j = j;
            break;
        }
    }

    if (key_j === -1) {
        return false;
    }

    arr1.map((item1, index) => {
        const arr2Indx = (key_j + index) % arr2.length;
        if (item1 !== arr2[arr2Indx]) {
            return false;
        }

    });

    return true;

}

const isRotation_double = (arr1, arr2) => {
    if (arr1.length < 1 || arr2.length < 1 || arr1.length !== arr2.length) {
        return false;
    }

    let key_i = -1;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[0]) {
            key_i = i;
            break;
        }
    }

    if (key_i === -1) {
        return false;
    }

    let double_arr1 = arr1.slice();
    double_arr1.push(...arr1);

    // arr2.map((item, index) => {
    //     if (item !== double_arr1[index + j]) {
    //         console.log('false returend');
    //         return false;
    //     }
    // });

    for (let j = 0; j < arr2.length; j++) {
        if (arr2[j] !== double_arr1[j + key_i]) {
            console.log('false returend');
            return false;
        }
    }
    return true;
}

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2 = [5, 6, 7, 8, 9, 1, 2, 3, 4];
const arr3 = [1, 3, 5, 7, 9, 0, 11, 14, 44, 77];
const arr4 = [3, 5, 6, 8, 2, 4, 88, 67, 43, 89];

console.log('result is arr1 arr2 ', isRotation(arr1, arr2));
console.log('result is arr3 arr4 ', isRotation(arr3, arr4));

console.log('result for double is arr1 arr2 ', isRotation_double(arr1, arr2));
console.log('result for double is arr3 arr4 ', isRotation_double(arr3, arr4));