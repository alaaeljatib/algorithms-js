const rotate2DArrayWithIdenticalArray = (arr, rows, columns) => {
    const identicalArray = []
    const result = []

    for (let i = 0; i < rows; i++) {
        const row = []
        const rowR = []
        for (let j = 0; j < columns; j++) {
            let valueToPush = 0
            if (i === j) {
                valueToPush = 1;
            }
            row.push(valueToPush);
            rowR.push(0);
        }
        identicalArray.push(row);
        result.push(rowR);
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            for (let k = 0; k < rows; k++) {
                result[i][j] += arr[j][k] * identicalArray[k][i];
            }
        }
    }
    return result;

}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const rows = 3;
const columns = 3;

console.log('rotated array is ', rotate2DArrayWithIdenticalArray(arr, rows, columns));