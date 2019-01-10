const deserializeTree = require('./TreeDeserialize');

const isSymetricBinaryTree = (root) => {
    return isMirror(root, root);
}

const isMirror = (root1, root2) => {
    if (typeof(root1)  === 'undefined' && typeof(root2) === 'undefined') return true;

    if (typeof(root1)  === 'undefined' || typeof(root2) === 'undefined') return false;

    return root1.value === root2.value && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left);
}

const arr1 = [1,2]
const arr2 = [3,4]

const root1 = deserializeTree(arr1);
const root2 = deserializeTree(arr2);

console.log(' tree 1 is ', root1, isSymetricBinaryTree(root1));
console.log(' tree 2 is ', root2, isSymetricBinaryTree(root2));