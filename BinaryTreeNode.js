class BinaryTreeNode {
    constructor(value) {
        if (typeof (value) !== 'undefined' && value !== null) {
            this.value = value;
        }

        this.left = undefined;
        this.right = undefined;
    }

    add(value) {
        if (typeof (value) === 'undefined' || value === null) return false;
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

module.exports = BinaryTreeNode;