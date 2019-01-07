const BinaryTreeNode = require('./BinaryTreeNode');

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

const arr = [3, 5, 1, 6, 2, 0, 8, undefined, undefined, 7, 4];
const arr1 = [3, 5, 1, 6, 2, 0, 8, 11, 10, 7, 4];


console.log('tree is ', JSON.stringify(deserializeTree(arr)));