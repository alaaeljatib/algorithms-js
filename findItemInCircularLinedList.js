const findLoopInLinkedList = require('./findLoopInLinkedList');
const LinkedList = require('./LinkedList');

const findItemInCircularLinkedList = (lst, item) => {
    if (lst === null) return null;

    let loopStartingPoint = findLoopInLinkedList(lst);

    let p = lst.head;

    while (p !== loopStartingPoint) {
        if (p.value === item) return p;
        p = p.next;
    }

    if (p === null) return null;

    if (loopStartingPoint.value === item) return loopStartingPoint;

    p = loopStartingPoint.next;

    while (p !== loopStartingPoint) {
        if (p.value === item) return p;
        p = p.next;
    }
    return null;
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

const item = 14
const loopedList = generateLoopedLinkedList(lst, 20);

console.log('item ', item, 'is at index number ', findItemInCircularLinkedList(loopedList, item));