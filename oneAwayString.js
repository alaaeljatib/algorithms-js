const oneAwayString = (str1, str2) => {
    if (Math.abs(str1.length - str2.length) > 1) {
        return false;
    }

    if (str1.length === str2.length) {
        return oneAwaySameLength(str1, str2);
    } else if (str1.length > str2.length) {
        return oneAwayDifferentLength(str1, str2);
    } else {
        return oneAwayDifferentLength(str2, str1);
    }
}

const oneAwaySameLength = (str1, str2) => {

    let diffCount = 0;

    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            diffCount++;
            if (diffCount > 1) {
                return false;
            }
        }
    }

    return true;
}

const oneAwayDifferentLength = (str1, str2) => {
    let diffCount = 0;
    let i = 0;

    while (i < str2.length) {
        if (str2[i] != str1[i + diffCount]) {
            diffCount++;
            if (diffCount > 1) {
                return false;
            }
        } else {
            i++;
        }
    }

    return true;
}

const str1 = 'abcde'
const str2 = 'abrde'
const str3 = 'zxcvb'
const str4 = 'xcgb'
const str5 = 'xcgbd'

console.log('str1 and str2 result is ', oneAwayString(str1, str2));
console.log('str3 and str4 result is ', oneAwayString(str3, str4));
console.log('str3 and str5 result is ', oneAwayString(str3, str5));
console.log('str4 and str5 result is ', oneAwayString(str4, str5));
console.log('str1 and str3 result is ', oneAwayString(str1, str3));
console.log('str2 and str3 result is ', oneAwayString(str2, str3));
console.log('str1 and str5 result is ', oneAwayString(str1, str5));
console.log('str2 and str4 result is ', oneAwayString(str2, str4));