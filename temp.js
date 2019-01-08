class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
}

const deserializeTree = (arr) => {
    return deserializeTreeHelper(arr, undefined, 0);
}

const deserializeTreeHelper = (arr, root, i) => {


    if (typeof (arr) === 'undefined' ||
        (typeof (arr) !== 'undefined' && arr.length === 0)) return undefined;

    if (i < arr.length) {

        root = new BinaryTreeNode(arr[i]);

        root.left = deserializeTreeHelper(arr, root.left, 2 * i + 1);

        root.right = deserializeTreeHelper(arr, root.right, 2 * i + 2);
    }

    return root;
}

const lowestCommonAncestor = (root, item1, item2) => {
    if (typeof (root) === 'undefined' || root === null) return undefined;

    const pathToItem1 = pathFromRootToX(root, item1);
    if (typeof (pathToItem1) === 'undefined' || pathToItem1 === null) return undefined;

    const pathToItem2 = pathFromRootToX(root, item2);
    if (typeof (pathToItem2) === 'undefined' || pathToItem2 === null) return undefined;

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
    if (typeof (root) === 'undefined' || root === null) return undefined;

    if (item === root.value) {
        return [root.value];
    };

    if (typeof (root.left) !== 'undefined' && root.left != null) {

        const leftPath = pathFromRootToX(root.left, item);

        if (typeof (leftPath) !== 'undefined' && leftPath != null) {
            leftPath.unshift(root.value);
            return leftPath;
        };
    }

    if (typeof (root.right) !== 'undefined' && root.right != null) {

        const rightPath = pathFromRootToX(root.right, item);

        if (typeof (rightPath) !== 'undefined' && rightPath != null) {
            rightPath.unshift(root.value);
            return rightPath;
        }
    }

    return undefined;

}

const val1 = 5;
const val2 = 1;

const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];


console.log('lowest common ancestor for ' + val1 + ' and ' + val2 + ' is ', lowestCommonAncestor(deserializeTree(arr), val1, val2));