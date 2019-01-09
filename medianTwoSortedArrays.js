const quickSort = require('./quickSort');

const medianTwoSortedArrays = (arr1, arr2) => {
    let combinedArray = []
    let sum = 0;

    let i = 0,
        j = 0;

    while (i < arr1.length && j < arr2.length) {
        const value1 = arr1[i];
        const value2 = arr2[j];

        if (value1 > value2) {
            combinedArray.push(value2);
            sum += value2;
            j++;

        } else if (value1 < value2) {
            combinedArray.push(value1);
            sum += value1;
            i++;

        } else {
            combinedArray.push(value1);
            combinedArray.push(value2);
            sum += value1;
            i++;
            j++;
        }
    }

    while (i < arr1.length) {
        combinedArray.push(arr1[i]);

        sum += arr1[i];
        i++;
    }

    while (j < arr2.length) {
        combinedArray.push(arr2[j]);
        sum += arr2[j];
        j++;
    }

    const n = combinedArray.length;
    const mid = Math.floor((n + 1) / 2);

    if (n % 2 === 0)
        return (combinedArray[mid - 1] + combinedArray[mid]) / 2.0
    else
        return (combinedArray[mid - 1])
}



// const findMedianSortedArrays = (A, B) => {
//     let m = A.length;
//     let n = B.length;
//     if (m > n) { // to ensure m<=n
//         let temp = A;
//         A = B;
//         B = temp;
//         tmp = m;
//         m = n;
//         n = tmp;
//     }
//     let iMin = 0,
//         iMax = m,
//         halfLen = Math.floor((m + n + 1) / 2);
//     while (iMin <= iMax) {
//         let i = Math.floor((iMin + iMax) / 2);
//         let j = halfLen - i;
//         if (i < iMax && B[j - 1] > A[i]) {
//             iMin = i + 1; // i is too small
//         } else if (i > iMin && A[i - 1] > B[j]) {
//             iMax = i - 1; // i is too big
//         } else { // i is perfect
//             let maxLeft = 0;
//             if (i == 0) {
//                 maxLeft = B[j - 1];
//             } else if (j == 0) {
//                 maxLeft = A[i - 1];
//             } else {
//                 maxLeft = Math.max(A[i - 1], B[j - 1]);
//             }
//             if ((m + n) % 2 == 1) {
//                 return maxLeft;
//             }

//             let minRight = 0;
//             if (i == m) {
//                 minRight = B[j];
//             } else if (j == n) {
//                 minRight = A[i];
//             } else {
//                 minRight = Math.min(B[j], A[i]);
//             }

//             return (maxLeft + minRight) / 2;
//         }
//     }
// }

const arr1 = [1, 4, 5, 7, 3, 1, 7, 8, 9, 0, 3, 4, 55, 2, 11, 11, 4, 22]
const sortedArray1 = quickSort(arr1);
console.log('sorted arr1 ', sortedArray1);

const arr2 = [5, 43, 6, 7, 8, 9, 2, 11, 4, 33, 5, 44, 12, 8]
const sortedArray2 = quickSort(arr2);
console.log('sorted arr2 ', sortedArray2);

console.log('median is ', medianTwoSortedArrays(sortedArray1, sortedArray2));
// console.log('median of two sorted array is ', findMedianSortedArrays(sortedArray1, sortedArray2))