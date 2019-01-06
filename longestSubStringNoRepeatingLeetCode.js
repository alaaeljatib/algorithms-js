const longestSubstring = (str) => {
    let result = {
        str: '',
        index: 0,
        maxLength: 0
    }

    let dict = {};

    let start = 0,
        currentMaxLength = 0;
    let key;

    for (let end = 0; end < str.length; end++) {
        key = str.charAt(end);

        if (key in dict) {
            start = start < dict[key] ? dict[key] : start;
        }
        currentMaxLength = end - start + 1;

        if (result.maxLength < currentMaxLength) {
            result.maxLength = currentMaxLength;
            result.str = str.substr(start, currentMaxLength);
            result.index = start;
        }

        dict[key] = end + 1;
    }


    return result;
}

const str1 = 'aabcddefghijjklm';
let result = longestSubstring(str1);

console.log('longest substring for ' + str1 + 'is ' + result.str + ' at index ' + result.index + ' max length is ' + result.maxLength);

const str2 = 'abcde';
result = longestSubstring(str2);

console.log('longest substring  ' + str2 + ' is ' + result.str + ' at index ' + result.index + ' max length is ' + result.maxLength);

const str3 = 'abcdeefg';
result = longestSubstring(str3);

console.log('longest substring ' + str3 + ' is ' + result.str + ' at index ' + result.index + ' max length is ' + result.maxLength);