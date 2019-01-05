const expandMineSweeper = (fields, rows, columns, clicked_row, clicked_col) => {
    if (fields[clicked_row][clicked_col] !== 0) {
        return fields;
    } else {
        let toCheckQueue = []

        toCheckQueue.unshift([clicked_row, clicked_col]);

        while (toCheckQueue.length > 0) {

            const [
                toCheckRow,
                toCheckCol
            ] = toCheckQueue.pop();
            for (let i = toCheckRow - 1; i <= toCheckRow + 1; i++) {
                for (j = toCheckCol - 1; j <= toCheckCol + 1; j++) {
                    if (i >= 0 && j >= 0 && i < columns && j < rows &&
                        fields[i][j] === 0) {
                        fields[i][j] = -2;
                        toCheckQueue.unshift([i, j]);
                    }
                }
            }
        }
        return fields;
    }

}

const fields = [
    [-1, 1, 0, 0],
    [1, 1, 0, 0],
    [0, 0, 1, 1],
    [0, 0, 1, -1]
]
const rows = 4;
const columns = 4;
const clicked_row = 1
const clicked_col = 2

console.log('result is ', expandMineSweeper(fields, rows, columns, clicked_row, clicked_col));