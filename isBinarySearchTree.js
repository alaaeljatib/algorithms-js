const BinarySearchTree = require('./BinaryTree');

const isBinarySearchTree = (root) => {
    return isBst(root, undefined, undefined);
}

const isBst = (node, lowerLim, upperLim) => {
    if (typeof (lowerLim) != 'undefined' && node.value < lowerLim) return false;
    if (typeof (upperLim) != 'undefined' && upperLim < node.value) return false;
    let isLeftBST = true;
    let isRightBST = true;
    if (node.left != null) {
        isLeftBST = isBst(node.left, lowerLim, node.value);
    }
    if (isLeftBST && node.right != null) {
        isRightBST = isBst(node.right, node.value, upperLim);
    }
    return isLeftBST && isRightBST;

}

const tree = new BinarySearchTree(5);
tree.add(4);
tree.add(3);
tree.add(2);
tree.add(1);
tree.add(0);
tree.add(6);
tree.add(7);
tree.add(8);
tree.add(9);
tree.add(10);
tree.add(14);
tree.add(13);
tree.add(12);
tree.add(11);
tree.add(20);
tree.add(16);
tree.add(17);
tree.add(18);
tree.add(19);
tree.add(30);
console.log('tree ', JSON.stringify(tree));

console.log('tree is bst ', isBinarySearchTree(tree.root));