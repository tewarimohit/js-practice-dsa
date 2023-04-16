class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      let removedListItem = this.head;
      this.head = this.head.next;
      this.head.previous = null;
      this.size--;
      return removedListItem;
    }
  }

  //   O(1)
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    let removedListItem = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }
    this.size--;
    return removedListItem;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty.");
      return;
    }
    let printValues = "";
    let curr = this.head;
    while (curr) {
      printValues += `${curr.value} `;
      curr = curr.next;
    }
    console.log(printValues);
  }

  printReverse() {
    if (this.isEmpty()) {
      console.log("List is Empty.");
      return;
    } else {
      let printValues = "";
      let curr = this.tail;
      while (curr) {
        printValues += `${curr.value} `;
        curr = curr.previous;
      }
      console.log(printValues);
    }
  }
}

const list = new DoublyLinkedList();

console.log(list.isEmpty());
console.log(list.getSize());

list.append(10);
list.append(20);
list.append(30);
list.append(40);
list.append(50);
list.print();
list.prepend(0);
list.print();
console.log(list.removeFromFront());
list.print();
console.log(list.removeFromEnd());
list.print();

list.printReverse();
