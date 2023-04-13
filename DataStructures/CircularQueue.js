// CircularQueue: Size of the queue is fixed single memory block is used as if first element is connected to last element
//  Reffered to as circular buffer or ring buffer follows FIFO
//  It will reuse the empty buffer created during the dequeue operation
//  Due to this when we are working with queues of fixed maximum size circular queue is great implementation of choice.
//   2 main operation
//  Enqueue- which adds an element to the Queue
//  Dequeue- which removes the oldest element from the Queue
//  uses: clock, streaming data, traffic light

// peek()-> get the value of the element in the front of queue without removing it.
// isEmpty()-> check if the queue is empty.
// isFull()-> to check if the queue is full.
// size()-> to get the no of elements in the queue
// print()-> visualizing the elements in the queue

class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.capacity = size;
    this.arrayLength = 0;
    this.front = -1;
    this.rear = -1;
  }

  enqueue(element) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = element;
      this.arrayLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    } else {
      const removedItem = this.items[this.front];
      this.items[this.front] = null;
      this.front = (this.front + 1) % this.capacity;
      this.arrayLength -= 1;
      if (this.isEmpty()) {
        this.front = -1;
        this.rear = -1;
      }
      return removedItem;
    }
  }

  peek() {
    return this.items[this.front];
  }

  isEmpty() {
    return this.arrayLength === 0;
  }

  isFull() {
    return this.arrayLength === this.capacity;
  }

  size() {
    return this.arrayLength;
  }

  print() {
    if (this.isEmpty()) {
      console.log("No items in the array!!");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);

console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue("Mohit");
queue.enqueue(false);
queue.enqueue("tewari");

console.log(queue);

console.log(queue.dequeue());
queue.enqueue(30);
console.log(queue);

queue.print();
