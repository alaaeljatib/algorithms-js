const noFrequentChar = (str) => {
    if (str.length > 128) {
        return false;
    }

    let counter = Array.from('0'.repeat(128));

    for (let i = 0; i < str.length; i++) {

        if (counter[str.charCodeAt(i) - 'a'.charCodeAt(0)] !== '0') {
            console.log('i charCode is ', counter[str.charCodeAt(i) - 'a'.charCodeAt(0)]);
            return false;
        } else {
            counter[str.charCodeAt(i) - 'a'.charCodeAt(0)] = '1';
        }
    }

    return true;
}

const str1 = 'kfjhsdkfjsdkfklsd'
const str2 = 'poiuytrewq'
const str3 = 'abcdefgxyz'
const str4 = 'abcdefghijklmnn'

console.log('str result is', noFrequentChar(str1));
console.log('str2 reault is', noFrequentChar(str2));
console.log('str3 result is ', noFrequentChar(str3));
console.log('str4 result is ', noFrequentChar(str4));