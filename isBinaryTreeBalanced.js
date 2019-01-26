const deserializeTree = require('./TreeDeserialize');


var isBinaryTreeBalanced = (root) => {
    if (typeof (root) === 'undefined' || root === null) {
        return true;
    }
    return maxDepth(root) - minDepth(root) <= 1;
};

const minDepth = (node) => {
    if (typeof (node) === 'undefined' || node === null) {
        return 0;
    }
    return 1 + Math.min(minDepth(node.left), minDepth(node.right));
}


const maxDepth = (node) => {
    if (typeof (node) === 'undefined' || node === null) {
        return 0;
    }
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}


const arr = [3, 9, 20, null, null, 15, 7];

const root = deserializeTree(arr);

console.log(JSON.stringify(root));


console.log('the result is ', isBinaryTreeBalanced(root));