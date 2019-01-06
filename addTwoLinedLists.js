const LinkedList = require('./LinkedList');

const addTwoLinkedList = (num1, num2) => {
    if (num1.head === null) {
        return num2;
    }

    if (num2.head === null) {
        return num1;
    }

    let pointer1 = num1.head;
    let pointer2 = num2.head;

    let carry = 0;
    let currentValue = 0;

    let result;

    let pointer1Value = 0,
        pointer2Value = 0;

    while (pointer1 !== null || pointer2 !== null) {
        pointer1Value = pointer1 ? pointer1.value : 0;
        pointer2Value = pointer2 ? pointer2.value : 0;

        currentValue = (pointer1Value + pointer2Value + carry);

        if (typeof (result) === 'undefined') {

            result = new LinkedList(currentValue % 10);

        } else {

            result.addNode((currentValue) % 10);

        }

        carry = currentValue > 10 ? 1 : 0;

        pointer1 = pointer1 !== null ? pointer1.next : null;
        pointer2 = pointer2 !== null ? pointer2.next : null;
    }

    if (carry > 0) {
        result.addNode(1);
    }
    
    return result;
}

const num1 = new LinkedList(3);
num1.addNode(5);
num1.addNode(1);
num1.addNode(2);

const num2 = new LinkedList(9);
num2.addNode(9);
num2.addNode(9);

console.log('num1 >> ', JSON.stringify(num1));
console.log('num2 is >>', JSON.stringify(num2));
console.log(' 2153 + 642 = ', JSON.stringify(addTwoLinkedList(num1, num2)));