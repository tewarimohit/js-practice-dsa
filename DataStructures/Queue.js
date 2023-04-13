// Queue: Sequential collection of elements
//  Based on principle FIFO.
//  First one inserted is first one to be removed.
//  Queue of people  tail at one end and head on the other
//  It is also an abstract data type, defined by its behaviour its a list.
//  2 main operation
//  Enqueue- which adds an element to the rear tail of the collection.
//  Dequeue- which removes the element from the head of the collection.
// uses: printers to print a doc, cpu to process task callback queue in js

// more methods:
// peek()-> get the value of the element in the front of queue without removing it.
// isEmpty()-> check if the queue is empty.
// size()-> to get the no of elements in the queue
// print()-> visualizing the elements in the queue

class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[0];
    }
    return null;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
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
console.log(queue.print());

console.log(queue.size());
console.log(queue.isEmpty());

// time complexity enqueue->O(1)
// time complexity dequeue->O(n)
