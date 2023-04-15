import LinkedList from "./TailedLinkedList.js";

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }
  pop() {
    return this.list.removeFromFront();
  }
  peek() {
    return this.list.head.value;
  }
  isEmpty() {
    return this.list.isEmpty();
  }
  getSize() {
    return this.list.getSize();
  }
  print() {
    return this.list.print();
  }
}

const stack = new LinkedListStack();

console.log(stack.isEmpty());
stack.push(10);
stack.push(30);
stack.push(50);
stack.push(70);
console.log(stack.getSize());
stack.print();
console.log(stack.pop());
console.log(stack.peek());
stack.print();
