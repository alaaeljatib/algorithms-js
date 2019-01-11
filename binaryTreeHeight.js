const binaryTreeHeight = (root) => {
    if (root === null) return 0;

    return Math.max(1 + binaryTreeHeight(root.left), 1 + binaryTreeHeight(root.right));
}