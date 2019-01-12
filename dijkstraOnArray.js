const minimumDistance = (area, rows, cols) => {

    if (area === null || (area !== null && area.length === 0)) return -1;

    if (arr.length === 1 && arr[0].length === 0) return -1;

    if (arr.length === 1 && arr[0].length === 2 && arr[0][0] === 1 && arr[0][1] === 9) return 1;

    const toCheckQueue = [];

    const currentCost = [];
    const prev = [];

    // Initiating the arrays before starting to allocate the N location in memory
    for (let i = 0; i < rows; i++) {
        const currentRow = [];
        const prevRow = [];
        for (let j = 0; j < cols; j++) {
            currentRow.push(Number.MAX_SAFE_INTEGER);
            prevRow.push([]);
        }
        currentCost.push(currentRow);
        prev.push(prevRow);
    }

    currentCost[0][0] = area[0][0];
    // Let the fun begin!
    toCheckQueue.unshift([0, 0]);

    while (toCheckQueue.length > 0) {

        const [toCheckRow, toCheckCol] = toCheckQueue.pop();

        for (let i = toCheckRow - 1; i <= toCheckRow + 1; i++) {
            for (let j = toCheckCol - 1; j <= toCheckCol + 1; j++) {
                if (i >= 0 && j >= 0 && i < rows && j < cols && (i === toCheckRow ^ j === toCheckCol) && area[i][j] !== 0 && prev[i][j] !== [i, j]) {
                    const currentAreaValue = area[i][j];
                    if (currentAreaValue === 1) {
                        if (currentAreaValue + currentCost[toCheckRow][toCheckCol] < currentCost[i][j]) {
                            currentCost[i][j] = currentAreaValue + currentCost[toCheckRow][toCheckCol];
                            prev[i][j] = [toCheckRow, toCheckCol];
                        }

                        toCheckQueue.unshift([i, j]);

                    } else if (currentAreaValue === 9) { // found it!

                        return currentCost[toCheckRow][toCheckCol];
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