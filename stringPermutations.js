const getAllPermutaions = (str) => {
    const result = [];
    permutationsHelper(str, '', result);
    return result;
}

const permutationsHelper = (str, prefix, result) => {
    if (str.length === 0) result.push(prefix);

    for (let i = 0; i < str.length; i++) {
        const remain = str.substr(0, i) + str.substr(i + 1);

        permutationsHelper(remain, prefix + str.charAt(i), result);

    }
}

const str = 'suzan';

const permutations = getAllPermutaions(str);
console.log(str + ' permutations are ', permutations, permutations.length);