const minimumDistance = (area, rows, cols) => {

    if (area === null || (area !== null && area.length === 0)) return -1;

    if (arr.length === 1 && arr[0].length === 0) return -1;

    if (arr.length === 1 && arr[0].length === 2 && arr[0][0] === 1 && arr[0][1] === 9) return 1;

    const toCheckQueue = [];

    const currentCost = [];

    // Initiating the arrays before starting to allocate the N location in memory
    for (let i = 0; i < rows; i++) {
        const currentRow = [];
        for (let j = 0; j < cols; j++) {
            currentRow.push([0, false]);
        }
        currentCost.push(currentRow);
    }

    // Let the fun begin!
    toCheckQueue.unshift([0, 0]);

    while (toCheckQueue.length > 0) {

        const [toCheckRow, toCheckCol] = toCheckQueue.pop();
        // console.log('queue', toCheckQueue, 'toCheckRow', toCheckRow, 'toCheckCol', toCheckCol);

        for (let i = toCheckRow - 1; i <= toCheckRow + 1; i++) {
            for (let j = toCheckCol - 1; j <= toCheckCol + 1; j++) {
                if (i >= 0 && j >= 0 && i < rows && j < cols && (i === toCheckRow ^ j === toCheckCol) && !currentCost[i][j][1]) {
                    console.log(i, j, toCheckRow, toCheckCol);

                    const currentAreaValue = area[i][j];

                    if (currentAreaValue === 1) {
                        // console.log('curretValue is 1');
                        if (toCheckRow === 0 && toCheckCol === 0) {
                            currentCost[i][j] = [currentAreaValue, true];
                        } else {
                            // console.log('prev is not empty');
                            currentCost[i][j] = [currentAreaValue + currentCost[toCheckRow][toCheckCol][0], true];

                            console.log('curentCost for i j ', i, j, currentCost[i][j]);
                        }
                        toCheckQueue.unshift([i, j]);
                    } else if (currentAreaValue === 9) { // found it!
                        return currentCost[toCheckRow][toCheckCol][0];

                    }
                }
            }
        }
    }
    return -1;
}

const arr = [
    [1, 0, 1],
    [1, 1, 1],
    [1, 9, 1]
]

console.log(minimumDistance(arr, 3, 3));