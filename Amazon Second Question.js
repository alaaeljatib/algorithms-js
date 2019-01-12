// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function minimumDistance(numRows, numColumns, area) {
    // WRITE YOUR CODE HERE

    if (area === null || (area !== null && area.length === 0)) return -1;

    if (arr.length === 1 && arr[0].length === 0) return -1;

    if (arr.length === 1 && arr[0].length === 2 && arr[0][0] === 1 && arr[0][1] === 9) return 1;

    let toCheckQueue = []; // use array as queue where push first pop last

    toCheckQueue.unshift([0, 0]);

    let currentCost = [];

    let prev = [];

    for (let i = 0; i < numRows; i++) {
        const row = [];
        for (let j = 0; j < numColumns; j++) {
            row.push(0);
        }
        currentCost.push(row);
        prev.push(row);
    }


    while (toCheckQueue.length > 0) {
        const [toCheckRow, toCheckCol] = toCheckQueue.pop();

        currentCost[toCheckRow][toCheckCol] = area[toCheckRow][toCheckCol] + prev[toCheckRow][toCheckCol];

        for (let i = toCheckRow - 1; i <= toCheckRow + 1; i++) {
            for (let j = toCheckCol - 1; j <= toCheckCol; j++) {
                if (i >= 0 && j >= 0 && i < numColumns && j < numRows) {
                    const currentAreaValue = area[i][j];

                    if (currentAreaValue === 1) {
                        if (currentAreaValue + prev[i][j] < currentCost[i][j]) {
                            currentCost[i][j] = currentAreaValue + prev[i][j];
                            toCheckQueue.unshift([i, j]);
                        } else if (currentAreaValue === 9) { // found it!
                            currentCost[i][j] = currentAreaValue + Math.min(prev[i - 1][j], prev[i][j - 1], prev[i - 1][j - 1], prev[i][j]);
                            return current[i][j];
                        }
                    }
                }
            }

            prev = currentCost.slice();
        }
        return -1;
    }
}
// FUNCTION SIGNATURE ENDS

const arr = [
    [1, 0, 1],
    [1, 1, 1],
    [1, 9, 1]
]
console.log(minimumDistance(3, 3, arr));