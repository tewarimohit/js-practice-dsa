class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const removedItem = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return removedItem;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    } else {
      return null;
    }
  }

  isEmpty() {
    return this.rear - this.front === 0;
  }

  size() {
    return this.rear - this.front;
  }

  print() {
    for (let values in this.items) {
      console.log(this.items[values].toString());
    }
  }
}

const queue = new Queue();

console.log(queue.isEmpty());
console.log(queue.peek());
queue.enqueue(30);
queue.enqueue("Mohit");
queue.enqueue(20);
queue.enqueue("Tewari");

console.log(queue.peek());
console.log(queue.print());
console.log(queue.dequeue());
queue.print();

console.log(queue.size());
console.log(queue.isEmpty());

// time complexity O(1)
