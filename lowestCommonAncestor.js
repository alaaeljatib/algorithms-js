const BinarySearchTree = require('./BinaryTree');

const lowestCommonAncestor = (root, item1, item2) => {
    if (typeof (root) === 'undefined') return undefined;

    const pathToItem1 = pathFromRootToX(root, item1);
    if (typeof (pathToItem1) === 'undefined') return undefined;

    const pathToItem2 = pathFromRootToX(root, item2);
    if (typeof (pathToItem2) === 'undefined') return undefined;

    let i_ancestor = undefined,
        j_ancestor = undefined,
        lcm = undefined;

    console.log('paths are >>>', pathToItem1, pathToItem2);
    while (pathToItem1.length > 0 && pathToItem2.length > 0) {
        i_ancestor = pathToItem1.shift();
        j_ancestor = pathToItem2.shift();

        if (i_ancestor === j_ancestor) {
            lcm = i_ancestor;
        } else {
            break;
        }
    }

    return lcm;
}

const pathFromRootToX = (root, item) => {
    if (typeof (root) === 'undefined') return undefined;

    if (item === root.value) {
        return [root.value];
    };

    if (typeof (root.left) !== 'undefined') {

        const leftPath = pathFromRootToX(root.left, item);

        if (typeof (leftPath) !== 'undefined') {
            leftPath.unshift(root.value);
            return leftPath;
        };
    }

    if (typeof (root.right) !== 'undefined') {

        const rightPath = pathFromRootToX(root.right, item);

        if (typeof (rightPath) !== 'undefined') {
            rightPath.unshift(root.value);
            return rightPath;
        }
    }

    return undefined;

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
// console.log('tree ', JSON.stringify(tree));
const val1 = 13;
const val2 = 30;

console.log('lowest common ancestor for ' + val1 + ' and ' + val2 + ' is ', lowestCommonAncestor(tree.root, val1, val2));