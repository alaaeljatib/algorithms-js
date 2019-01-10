const isLetter = (str) => {


    return /[a-zA-Z0-9]/.test(str);
}

var isValidPalindrome = (str) => {

    if (str.length < 2) return true;


    let i = 0,
        j = str.length - 1;

    let left, right;

    while (i < j) {
        left = str.charAt(i);
        right = str.charAt(j);

        const isLeftALetter = isLetter(left);
        const isRightALetter = isLetter(right);

        console.log(left, right, isLeftALetter, isRightALetter);

        if (str.length === 2) return (isLeftALetter ^ isRightALetter) || (!isLeftALetter && !isRightALetter) || isLeftALetter && isRightALetter && left.toLocaleLowerCase() === right.toLocaleLowerCase();

        if (!isLeftALetter) i++;

        if (!isRightALetter) j--;

        if (isLeftALetter && isRightALetter) {
            if (left.toLocaleLowerCase() === right.toLocaleLowerCase()) {
                i++;
                j--;
            } else {
                return false;
            };
        }
    }

    return true;
}

const isValidPalindromeLeetCode = (strng) => {

    const str = strng.replace(/[\W_]+/g, '');

    if (str.length < 2) return true;


    let i = 0;
    const n = str.length;
    let left, right;

    const rgx = /[0-9]/;
    while (i < n) {
        left = str.charAt(i);
        right = str.charAt(n - 1 - i);
        if (rgx.test(left) || rgx.test(right)) {
            if (left !== right) return false;
        } else if (left.toLocaleLowerCase() !== right.toLocaleLowerCase()) return false;
        i++;
    }

    return true;
}

const str = "9;8'4P?X:1Q8`dOfJuJXD6FF,8;`Y4! YBy'Wb:ll;;`;\"JI0c2uvD':!LAk:s\"!'0.!2B55.T1VI?00Du?1,l``RFsc?Y?9vD5 K'3'1b!N8hn:'l. R:9:o`m1r.M2mrJ?`Wjv1`G6i6G`1vjW`?Jrm2M.r1m`o:::R .l':nh8N!b1'3'K 5Dv9?Y?csFR``l,1?uD00?IV1T.55B2!.0'!\"s:kAL!:'Dvu2c0IJ\";`;;ll9bW'yBY !4Y`;8,FF6DXJuJfOd`8Q1:X?P4'8;9"

// console.log(str.replace(/[\W_]+/g, ""))
console.log('str ' + str + 'is valid Palindrome? ', isValidPalindrome(str));

console.log('str ' + str + 'is valid Palindrome? ', isValidPalindromeLeetCode(str));