const rotate2DArrayInPlace = (arr) => {
    if (arr.length !== arr[0].length) {
        return false;
    }

    const n = arr.length;

    let temp = [-1, -1, -1, -1];
    let current_i;
    let current_j;

    for (let i = 0; i < n / 2 + n % 2; i++) {
        for (let j = 0; j < n / 2; j++) {
            current_i = i;
            current_j = j;

            for (let k = 0; k < 4; k++) {
                temp[k] = arr[current_i][current_j];
                [current_i, current_j] = [current_j, n - 1 - current_i];
            }

            for (let k = 0; k < 4; k++) {
                arr[current_i][current_j] = temp[(k + 3) % 4];
                [current_i, current_j] = [current_j, n - 1 - current_i];
            }
        }
    }
    return arr;
}

const arr1 = [
    [1, 2, 3, 0],
    [4, 5, 6, 0],
    [7, 8, 9, 0],
    [11, 12, 13, 0]
]



console.log('result for arr1 is ', rotate2DArrayInPlace(arr1));