import LinkedList from "./TailedLinkedList.js";

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }
  dequeue() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  getSize() {
    return this.list.getSize();
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  print() {
    return this.list.print();
  }
}

const queue = new LinkedListQueue();

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(30);
queue.enqueue(50);
queue.enqueue(70);
console.log(queue.getSize());
queue.print();
console.log(queue.dequeue());
console.log(queue.peek());
queue.print();
