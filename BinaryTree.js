const BinaryTreeNode = require('./BinaryTreeNode');

class BinarySearchTree {

    constructor(value) {
        this.root = new BinaryTreeNode(value);
    }

    add(value) {
        if (typeof (this.root) === 'undefined') {

            this.root = new BinaryTreeNode(value);

            return true;

        } else

            return this.root.add(value);
    }
}


module.exports = BinarySearchTree;