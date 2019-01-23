const deserializeTree = require('./TreeDeserialize');

const levelOrder = (root) => {

    if (root === null || typeof (root) === 'undefined') return null;

    const result = [];
    if (root.value !== null) result.push([root.value]);

    levelOrderHelper(root, result);

    return result;

};

const levelOrderHelper = (root, result) => {
    if (root === null || typeof (root) === 'undefined') return null;

    if (result === null) return null;

    if (typeof (root.left) !== 'undefined' || typeof (root.right) !== 'undefined' || root.left !== null || root.right !== null) {

        const arrRow = [];

        if (typeof (root.left) !== 'undefined' && root.left !== null && root.left.value !== null) arrRow.push(root.left.value);

        if (typeof (root.right) !== 'undefined' && root.right !== null && root.right.value !== null) arrRow.push(root.right.value);

        if (arrRow.length > 0) result.push(arrRow);
    }

    levelOrderHelper(root.left, result);
    levelOrderHelper(root.right, result);
}

const arr = [3, 9, 20, null, null, 15, 7];

const root = deserializeTree(arr);

console.log(JSON.stringify(root));


console.log('the result is ', levelOrder(root));