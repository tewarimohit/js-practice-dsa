class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // O(1)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  //   O(1)
  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      let removedValue = this.head.value;
      this.head = this.head.next;
      this.size--;
      return removedValue;
    }
  }

  //   O(n)
  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    let removedListItem = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }
    this.size--;
    return removedListItem;
  }

  // O(n)
  print() {
    if (this.isEmpty()) {
      console.log("The list is empty!!");
    } else {
      let curr = this.head;
      let listItems = "";
      while (curr) {
        listItems = listItems + `${curr.value} `;
        curr = curr.next;
      }
      console.log(listItems);
    }
  }
}

const list = new LinkedList();

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
