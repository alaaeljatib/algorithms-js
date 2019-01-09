class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const mergeTwoLists = (l1, l2) => {
    const combinedList = new ListNode(null);
    let combinedPointer = combinedList;

    if (l1 === null) return l2;
    if (l2 === null) return l1;


    let i = l1,
        j = l2;



    while (i != null && j != null) {

        const value1 = i.val;
        const value2 = j.val;

        if (value1 > value2) {
            combinedPointer.next = new ListNode(value2);
            combinedPointer = combinedPointer.next;
            j = j.next;

        } else if (value1 < value2) {
            combinedPointer.next = new ListNode(value1);
            combinedPointer = combinedPointer.next;
            i = i.next;

        } else {
            combinedPointer.next = new ListNode(value1);
            combinedPointer = combinedPointer.next;
            i = i.next;
            combinedPointer.next = new ListNode(value2);
            combinedPointer = combinedPointer.next;
            j = j.next;
        }
    }

    while (i !== null) {
        combinedPointer.next = new ListNode(i.val);
        combinedPointer = combinedPointer.next;
        i = i.next;
    }

    while (j !== null) {
        combinedPointer.next = new ListNode(j.val);
        combinedPointer = combinedPointer.next;
        j = j.next
    }

    return combinedList.next;
};