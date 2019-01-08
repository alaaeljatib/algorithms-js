const quickSort = require('./quickSort');

const findMedianSortedArrays = (A, B) => {
    let m = A.length;
    let n = B.length;
    if (m > n) { // to ensure m<=n
        let temp = A;
        A = B;
        B = temp;
        tmp = m;
        m = n;
        n = tmp;
    }
    let iMin = 0,
        iMax = m,
        halfLen = Math.floor((m + n + 1) / 2);
    while (iMin <= iMax) {
        let i = Math.floor((iMin + iMax) / 2);
        let j = halfLen - i;
        if (i < iMax && B[j - 1] > A[i]) {
            iMin = i + 1; // i is too small
        } else if (i > iMin && A[i - 1] > B[j]) {
            iMax = i - 1; // i is too big
        } else { // i is perfect
            let maxLeft = 0;
            if (i == 0) {
                maxLeft = B[j - 1];
            } else if (j == 0) {
                maxLeft = A[i - 1];
            } else {
                maxLeft = Math.max(A[i - 1], B[j - 1]);
            }
            if ((m + n) % 2 == 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i == m) {
                minRight = B[j];
            } else if (j == n) {
                minRight = A[i];
            } else {
                minRight = Math.min(B[j], A[i]);
            }

            return Math.floor((maxLeft + minRight) / 2);
        }
    }
}

const arr1 = [1, 4, 5, 7, 3, 1, 7, 8, 9, 0, 3, 4, 55, 2, 11, 11, 4, 22]
const sortedArray1 = quickSort(arr1);
console.log('sorted arr1 ', sortedArray1);

const arr2 = [5, 43, 6, 7, 8, 9, 2, 11, 4, 33, 5, 44, 12, 8]
const sortedArray2 = quickSort(arr2);
console.log('sorted arr2 ', sortedArray2);

console.log('median of two sorted array is ', findMedianSortedArrays(sortedArray1, sortedArray2))