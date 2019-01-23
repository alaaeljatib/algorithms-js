const levelOrder = (root) => {

    if (root === null) return null;

    const result = [
        [root.val]
    ];

    levelOrderHelper(root, result);

    return result;

};

const levelOrderHelper = (root, result) => {
    if (root === null) return null;

    if (result === null) return null;

    if (root.left !== null || root.right !== null) {

        const arrRow = [];

        if (root.left !== null) arrRow.push([root.left.val]);

        if (root.right !== null) arrRow.push([root.right.val]);

        result.push(arrRow);
    }

    levelOrderHelper(root.left, result);
    levelOrderHelper(root.right, result);
}