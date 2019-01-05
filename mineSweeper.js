const mineSweeper = (bombs, rows, columns) => {
    let result = []

    for (let i = 0; i < rows; i++) {
        const rowArr = []
        for (let j = 0; j < columns; j++) {
            rowArr.push(0);
        }
        result.push(rowArr);
    }

    bombs.map((bomb) => {
        const bombRow = bomb[0];
        const bombCol = bomb[1];
        result[bombRow][bombCol] = -1;

        for (let i = bombRow - 1; i <= bombRow + 1; i++) {
            for (j = bombCol - 1; j <= bombCol + 1; j++) {
                if (i >= 0 && j >= 0 && i < columns && j < rows &&
                    result[i][j] !== -1) {
                    result[i][j] += 1;
                }

            }

        }
    });

    return result;
}

const bombs = [
    [0, 0],
    [0, 1]
]
const rows = 3
const columns = 4

console.log('result is ', mineSweeper(bombs, rows, columns));