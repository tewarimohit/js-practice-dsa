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
        // if we check with previous it will not be null and loop will run again and node value can't be assigned to null.
        previous = previous.next;
      }
      previous.next = node;
    }
    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index > this.size) {
      return null;
    }
    let removedListItem;
    if (index === 0) {
      removedListItem = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedListItem = prev.next;
      prev.next = removedListItem.next;
    }
    this.size--;
    return removedListItem.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }
    if (this.head === this.head.value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let removedListItem;
      let prev = this.head;
      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        removedListItem = prev.next;
        prev.next = removedListItem.next;
        this.size--;
        return value;
      }
      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return `At index ${i}`;
      }

      curr = curr.next;
      i++;
    }
    return -1;
  }

  print() {
    if (this.isEmpty()) {
      console.log("The list is empty.");
    } else {
      let current = this.head;
      let listValues = "";
      while (current) {
        // If we check by current.next It will not print the last node value as current.next will be null
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
list.insert(22, 0);
list.print();
console.log(list.removeFrom(0));
list.print();
console.log(list.removeFrom(2));
list.print();
console.log(list.getSize());
console.log(list.removeValue(90));
list.print();
console.log(list.search(10));
