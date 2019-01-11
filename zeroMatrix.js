const zeroMatrix = (arr) => {
    const counter = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) counter.push([i, j]);
        }
    }

    for (let i = 0; i < counter.length; i++) {
        const [row, col] = counter[i];
        for (let k = 0; k < arr.length; k++) {
            for (let l = 0; l < arr[k].length; l++) {
                if (k === row || l === col) arr[k][l] = 0;
            }
        }
    }

    return arr;
}

const arr = [
    [1, 2, 3, 3, 2, 0],
    [4, 5, 6, 6, 5, 4],
    [7, 8, 9, 0, 8, 7],
    [1, 0, 3, 3, 2, 1],
    [4, 5, 6, 6, 5, 4]
];

console.log('the zero matrix of the given array is ', zeroMatrix(arr));