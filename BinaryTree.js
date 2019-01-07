class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }

    add(value) {
        if (this.value === value) {
            return false;
        } else if (value < this.value) {
            if (typeof (this.left) === 'undefined') {
                this.left = new BinaryTreeNode(value);
                return true;
            } else {
                this.left.add(value);
                return true;
            }
        } else if (value > this.value) {
            if (typeof (this.right) === 'undefined') {
                this.right = new BinaryTreeNode(value);
                return true;
            } else {
                this.right.add(value);
                return true;
            }
        }
        return false;

    }
}

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