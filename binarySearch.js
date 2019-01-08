const quickSort = require('./quickSort');

const binarySearch = (arr, item) => {
    if (!arr || (arr && arr.length === 0)) return -1;

    if (arr.length === 1) return arr[0] === item ? 0 : -1;

    let left = 0,
        right = arr.length;
    let mid;

    while (left <= right) {
        mid = Math.floor(left + right / 2);

        if (item < arr[mid]) {
            right = mid - 1;
        } else if (item > arr[mid]) {
            left = mid + 1;
        } else if (item === arr[mid]) {
            return mid;
        }
    }

    return -1;
}

const arr = [6, 55, 90, -1, 12, 2, 14, -5, 33, 6, 0, 123, 2, 3, -23, 6, 8, 3, 1, 6]
const item = 6;
const sortedArray = quickSort(arr);
console.log('sorted array is ', sortedArray);
console.log('item ' + item + ' where found at index ' + binarySearch(sortedArray, item));