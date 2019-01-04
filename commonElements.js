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
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr2 = [0, 1, 5, 9, 10]

console.log('result for brute force is', commonElement_bruteForce(arr1, arr2));

console.log('result for  counter solution is', commonElement_with_counter(arr1, arr2));