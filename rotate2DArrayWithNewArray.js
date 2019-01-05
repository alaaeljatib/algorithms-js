const rotate2DArray = (arr, rows, columns) => {
    let result = [];
    // init the array
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            row.push(0);
        }
        result.push(row);
    }
    // now do the logic
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            console.log('arr i', i, arr[i]);
            console.log('arr i j value', i, j, arr[i][j]);
            result[j][rows - 1 - i] = arr[i][j];
        }
    }

    return result;
}
const inputArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
const rows = 3;
const columns = 3;

console.log('rotated array is ', rotate2DArray(inputArray, rows, columns));
