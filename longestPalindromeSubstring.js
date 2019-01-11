const longestPalindromeSubstring = (str) => {
    if (!str || (str && str.length < 2)) return str;

    let start = 0,
        end = 0;

    for (let i = 0; i < str.length; i++) {
        const length1 = expandArroundCenter(str, i, i);
        const length2 = expandArroundCenter(str, i, i + 1);

        const len = Math.max(length1, length2);

        if (end - start < len) {
            start = i - Math.floor((len - 1) / 2);
            end = Math.floor(len / 2) + i;
        }
    }

    return str.substr(start, end - start + 1);
}

const expandArroundCenter = (str, left, right) => {
    let l = left,
        r = right;

    while (l > -1 && r < str.length && str.charAt(l) === str.charAt(r)) {
        l--;
        r++;
    }
    return r - l - 1;
}

const str = 'zxcvaabbccdccbbaa4324234'


console.log('longest palindrome substring is ', longestPalindromeSubstring(str));