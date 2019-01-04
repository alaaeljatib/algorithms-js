const maxFrequent = (nums) => {
    if (typeof (nums) === 'undefined') {
        return [];
    }
    if (nums.length < 2) {
        return nums;
    }

    let count = {}
    let mostFrequent = 0;

    nums.map((item) => {
        if (item.toString() in count) {
            count[item] += 1;
            if (count[item] > mostFrequent) {
                mostFrequent = count[item];
            }
        } else {
            count[item] = 1;
        }
    });
    return mostFrequent;

}

const nums = [1, 2, 2, 3, 3, 3, 4, 5, 5, 5, 5, 8];

console.log('result is ', maxFrequent(nums));