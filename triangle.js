const triangle = (arr) => {
    if (arr === null || arr && arr.length === 0) return null;
    if (arr.length === 1) return arr[0][0];

    let minSum = arr[0][0];
    let prevSum = 0;

    for (let i = 0; i < arr.length; i++) {
        prevSum = minSum;
        if (i + 1 < arr.length) minSum += arr[i + 1][0];

        for (let j = 0; j < arr[i].length; j++) {
            for (let k = j - 1; k < j + 2; k++) {
                if (i + 1 < arr.length) {
                    if (k > -1 && k < arr[i + 1].length) {
                        const newSum = (prevSum) + arr[i + 1][k];
                        console.log('new sum', newSum, 'min sum ', minSum, 'i ', i, ' j ', j, 'k ', k);
                        if (minSum > newSum) minSum = newSum;
                    }
                }
            }
        }
    }
    return minSum;
}

const arr = [
    [2],
    [3, 4],
    [6, 5, 7],
    [4, 1, 8, 3]
];

const arr2 = [
    [-1],
    [2, 3],
    [1, -1, -3]
];

console.log('shortest path from ', arr[0], ' to the end is ', triangle(arr2));