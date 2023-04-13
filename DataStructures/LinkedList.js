// LinkedList= It is a linear data structure that includes series of connected nodes
// Each node consists of data value and a pointer that connects to the  next node.
// The list elements can easily be inserted or removed without reallocation or reorganisation of entire structure.
// Due to this random access of element is not feasable and accessing an element has linear time complexity.
// 3 main operation
// Insertion: add an element in beginning,end or at a given index in a list
// Deletion: to remove an item given its index or value
// Search: find an element given its value.

// can be used to implement stacks and queues
// uses: all uses of stack and queues, image viewer

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  //   O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head; // assigning previous head to newly created node's next velue
      this.head = node; // then shifting head from old node to newly created node.
    }
    this.size++;
  }

  //   O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let previous = this.head;
      while (previous.next) {
        previous = previous.next;
      }
      previous.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty.");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += `${current.value} `;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

console.log(list.isEmpty());
console.log(list.getSize());
list.print();
list.prepend(10);
list.print();
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.print();
list.append(80);
list.print();
