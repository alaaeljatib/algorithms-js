console.log('hello Adam');

const twoSum = (nums, target) => {
    if (!nums.length > 0) {
        return []
    }

    let result = []
    let dict = {}

    nums.map((num, index) => {
        const potential = target - num;
        if (Object.keys(dict).indexOf(potential.toString()) > -1 ) {
            result.push(index);
            result.push(dict[potential]);
        } else {
            dict[num] = index;
        }
    });

    return result;
  
}

const nums = [1,2,3,4,5,7,8,9,11];
const target = 9;

console.log('result is ', twoSum(nums, target));