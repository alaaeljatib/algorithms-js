 class LinkedListNode {

     constructor(value) {
         this.value = value;
         this.next = null;
     }
 }
 class LinkedList {

     constructor(headValue) {
         this.head = new LinkedListNode(headValue);
     }

     addNode(value) {
         const newNode = new LinkedListNode(value);

         if (typeof (this.head) === 'undefined') {
             this.head = newNode;
         } else {
             let pointer = this.head;
             while (pointer.next !== null) {
                 pointer = pointer.next;
             }
             pointer.next = newNode;
         }
     }

     removeNode(value) {
         if (typeof (this.head) !== 'undefined') {
             if (this.head.value === value) {
                 this.head = head.next;
                 return true;
             } else {
                 let pointer = this.head;
                 while (pointer.next !== null) {
                     if (pointer.next.value === value) {
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

 //  const ls = new LinkedList(1);
 //  ls.addNode(2);
 //  ls.addNode(3);
 //  ls.addNode(4);
 //  ls.addNode(5);

 //  console.log('linked list with 1,2,3,4,5 values', JSON.stringify(ls));

 //  ls.removeNode(4);

 //  console.log('linked list with 1,2,3,5 values', JSON.stringify(ls));


 module.exports = LinkedList;