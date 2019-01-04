const nonRepeatedChar = (str) => {
    if (str.length < 2) {
        return nul;
    }
    let result = []
    let counter = {}

    for (const c of str) {
        if (c in counter) {
            counter[c] += 1;
        } else {
            counter[c] = 1;
        }
    }

    Object.keys(counter).map((key) => {
        if (counter[key] === 1) {
            result.push(key);
        }
    });

    return result;
}
const str1 = 'abcdoiuytr'
const str2 = 'aacbc'
const str3 = 'bvcfderdsd'
const str4 = 'xyzabc'

console.log('str1 >>>>', nonRepeatedChar(str1))
console.log('str2 >>>>', nonRepeatedChar(str2))
console.log('str3 >>>>', nonRepeatedChar(str3))
console.log('str4 >>>>', nonRepeatedChar(str4))