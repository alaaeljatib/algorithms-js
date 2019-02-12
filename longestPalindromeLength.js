const longestPalindromeLength = (str) => {
    if (!str || (str && str.length < 2)) return str.length;


    let countDict = {}

    for (let i = 0; i < str.length; i++) {
        let c = str[i]
        if (str[i] in countDict) {
            countDict[c] += 1
        } else {
            countDict[c] = 1
        }

    }
    let ans = 0;

    Object.values(countDict).map((num) => {
        ans += num / 2 * 2;
        if (ans % 2 == 0 && num % 2 == 1)
            ans += 1;
    });

    return ans;
}


const str = 'zxcvaabbccdccbbaa4324234'

console.log('longest palindrome length is ', longestPalindromeLength(str));