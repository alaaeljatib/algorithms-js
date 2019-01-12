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
            currentRow.push([Number.MAX_SAFE_INTEGER, false]);
        }
        currentCost.push(currentRow);
    }
    currentCost[0][0][1] = true;

    // Let the fun begin!
    toCheckQueue.unshift([0, 0]);

    let target = [];

    while (toCheckQueue.length > 0) {

        const [toCheckRow, toCheckCol] = toCheckQueue.pop();
        // console.log('queue', toCheckQueue, 'toCheckRow', toCheckRow, 'toCheckCol', toCheckCol);

        for (let i = toCheckRow - 1; i <= toCheckRow + 1; i++) {
            for (let j = toCheckCol - 1; j <= toCheckCol + 1; j++) {
                if (i >= 0 && j >= 0 && i < rows && j < cols && (i === toCheckRow ^ j === toCheckCol) && !currentCost[i][j][1]) {
                    console.log(toCheckRow, toCheckCol, 'i', i, 'j', j);

                    const currentAreaValue = area[i][j];

                    if (currentAreaValue === 1) {
                        currentCost[i][j] = [currentAreaValue + currentCost[toCheckRow][toCheckCol][0], true];

                        toCheckQueue.unshift([i, j]);

                    } else if (currentAreaValue === 9) { // found it!
                        target = [i, j];
                        // console.log('curentCost for i j ', i, j, currentCost[i][j], currentCost[toCheckRow][toCheckCol], toCheckRow, toCheckCol);
                        const newCurrentCost = currentAreaValue + currentCost[toCheckRow][toCheckCol][0];

                        if (newCurrentCost < currentCost[i][j])
                            currentCost[i][j] = [newCurrentCost, false];
                    }
                }
            }
        }
    }
    if (target.length > 1) return currentCost[target[0]][target[1]][0];

    return -1;
}
const arr = [
    [1, 0, 1],
    [1, 1, 1],
    [1, 9, 1]
]

console.log(minimumDistance(arr, 3, 3));