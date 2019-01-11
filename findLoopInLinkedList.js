const LinkedList = require('./LinkedList');

const findLoopInLinkedList = (lst) => {

    if (lst.head === null) return null;

    let slow = lst.head,
        fast = lst.head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) break;
    }

    if (fast === null || fast.next === null) return null;

    slow = lst.head;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return fast;
}

const lst = new LinkedList(0);
lst.addNode
const generateLoopedLinkedList = (lst, maxVal) => {
    let pointer = lst.head;

    for (let i = 0; i < maxVal; i++) {
        lst.addNode(i);
        pointer = pointer.next;
    }
    pointer.next = lst.head.next.next.next.next.next;
    return lst;
}

module.exports = findLoopInLinkedList;

// const loopedList = generateLoopedLinkedList(lst, 20);




// console.log('Looped list is ', lst, ' looping is at index number ', findLoopInLinkedList(loopedList).value);