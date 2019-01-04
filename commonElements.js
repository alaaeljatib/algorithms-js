// unsorted arrays
const commonElement_bruteForce = (arr1, arr2) => {
    if ((arr1.length < 1) || (arr2.length < 1)) {
        return [];
    }
    let result = [];

    arr1.map((item1, index1) => {
        arr2.map((item2, index2) => {
            if (item1 === item2) {
                result.push(item1);
            }
        });
    });

    return result;
}

const commonElement_with_counter = () => {
    if ((arr1.length < 1) || (arr2.length < 1)) {
        return [];
    }

    let result = [];
    let counter = {}
    

    arr1.map((item1, index) => {
        
        if(item1.toString() in counter) {
            counter[item1] +=1;
            result.push(item1);
        } else {
            counter[item1] = 1;
        }

        if (index < arr2.length) {
            const item2 = arr2[index];
            if(item2.toString() in counter) {
                counter[item2] +=1;
                result.push(item2);
            } else {
                counter[item2] = 1;
            }
        }
    });
    return result;
}

//Sorted Arrays 
const commonElement_sorted = (arr1, arr2) => {
    if ((arr1.length < 1) || (arr2.length < 1)) {
        return [];
    }
    let result = [];

    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else {
            result.push(arr1[i]);
            i++;
            j++;
        }
    }

    return result;
}

const arr1 = [6, 3, 4, 7, 8, 9, 1, 2, 5]
const arr2 = [9, 10, 0, 1, 5, 3]

console.log('result for brute force is', commonElement_bruteForce(arr1, arr2));

console.log('result for  counter solution is', commonElement_with_counter(arr1, arr2));

 const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
 const arr4 = [0, 1, 5, 9, 10]

 console.log('result for  sorted solution is', commonElement_sorted(arr3, arr4));