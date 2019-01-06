const LinkedList = require('./LinkedList');

const lastNthElement = (lst, nth) => {
    let first = lst.head;
    let last = lst.head;

    for (let i = 0; i < nth; i++) {
        if (last === null) return null;
        last = last.next;
    }

    while(last != null) {
        first = first.next;
        last = last.next;
    }

    return first.value;
}

const list1 = new LinkedList(0);
list1.addNode(1);
list1.addNode(2);
list1.addNode(3);
list1.addNode(4);
list1.addNode(5);
list1.addNode(6);
list1.addNode(7);
list1.addNode(8);
list1.addNode(9);

console.log(' item number 5 in the list is ', lastNthElement(list1, 1));