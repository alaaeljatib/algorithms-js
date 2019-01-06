/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

class ListNode {

    constructor(value) {
        this.val = value;
        this.next = undefined;
    }
}

class LinkedList {

    constructor(headValue) {
        this.head = new ListNode(headValue);
    }

    addNode(value) {
        const newNode = new ListNode(value);

        if (!this.head || typeof (this.head) === 'undefined') {
            this.head = newNode;
        } else {
            let pointer = this.head;
            while (typeof (pointer.next) !== 'undefined') {
                pointer = pointer.next;
            }
            pointer.next = newNode;
        }
    }

    removeNode(value) {
        if (typeof (this.head) !== 'undefined') {
            if (this.head.val === value) {
                this.head = head.next;
                return true;
            } else {
                let pointer = this.head;
                while (typeof (pointer.next) !== 'undefined') {
                    if (pointer.next.val === value) {
                        pointer.next = pointer.next.next;
                        return true;
                    }
                    pointer = pointer.next;
                }
            }
        }
        return false;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = (num1, num2) => {
    if (typeof (num1) === 'undefined') {
        return num2;
    }

    if (typeof (num2) === 'undefined') {
        return num1;
    }

    let pointer1 = num1;
    let pointer2 = num2;

    let carry = 0;
    let currentValue = 0;

    let result;

    let pointer1Value = 0,
        pointer2Value = 0;

    while ((pointer1 && typeof (pointer1) !== 'undefined') || (pointer2 && typeof (pointer2) !== 'undefined')) {
        pointer1Value = pointer1 && typeof (pointer1) !== 'undefined' ? pointer1.val : 0;
        pointer2Value = pointer2 && typeof (pointer2) !== 'undefined' ? pointer2.val : 0;

        currentValue = (pointer1Value + pointer2Value + carry);

        if (typeof (result) === 'undefined') {

            result = new LinkedList(currentValue % 10);

        } else {

            result.addNode((currentValue) % 10);

        }

        carry = currentValue >= 10 ? 1 : 0;

        pointer1 = pointer1 && typeof (pointer1) !== 'undefined' ? pointer1.next : undefined;
        pointer2 = pointer2 && typeof (pointer2) !== 'undefined' ? pointer2.next : undefined;
    }

    if (carry > 0) {
        result.addNode(1);
    }

    return result.head;
};

const num1 = new LinkedList(3);
num1.addNode(5);
num1.addNode(1);
num1.addNode(2);

const num2 = new LinkedList(9);
num2.addNode(9);
num2.addNode(9);

console.log('num1 >> ', JSON.stringify(num1));
console.log('num2 is >>', JSON.stringify(num2));
console.log(' 2153 + 642 = ', JSON.stringify(addTwoNumbers(num1.head, num2.head)));