const longestSubstring = (str) => {
    let result = {
        str: str,
        index: 0,
        maxLength: 0
    }

    // building the dictionary

    let dict = {};
    for (let i = 0; i < str.length; i++) {
        const key = str.charAt(i);

        if (key in dict && (dict[key].end < i && str.charAt(i - 1) === key)) {
            dict[key] = {
                ...dict[key],
                end: i
            }
        } else {
            dict[key] = {
                start: i,
                end: i
            };
        }
    }
    let start = 0,
        end = 0;

    // quick lookup!

    Object.keys(dict).map((key) => {
        const item = dict[key];

        if (item.start >= end) {
            if (item.end > item.start) {
                end = item.start - 1;
            } else {
                end = item.end;
            }
        }

        if (result.maxLength < end - start + 1) {
            result.maxLength = end - start + 1;
            result.str = str.substr(start, result.maxLength);
            result.index = start;
        }

        if (item.end > item.start && end === item.start - 1) {
            start = item.end + 1;
            end = item.end + 1;
        }
    });

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