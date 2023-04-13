// Stack: Sequential collection of elements
// Based on principle LIFO
// Last element in the stack is first one to be removed
// It is an abstract data type, defined by its behaviour
// 2 main operation push,pop insert,remove from the top
// uses: browser operations, undo typing, call stack in js

// more operations :
// peek()-> get the value of the top element without removing it.
// isEmpty()-> check if the stack is empty.
// size()-> to get the no of elements in the stack
// print()-> visualizing the elements in the stack

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
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

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(60);
stack.push("Mohit");
stack.push(false);

console.log(stack.isEmpty());

console.log(stack.size());
console.log(stack.print());
console.log(stack.pop());
console.log(stack.print());

// stack works only in LIFO principle unlike array which performs random operations
// List with restrictions
// Big O-> O(1)
