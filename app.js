/** @format */

class Node {
  constructor(value) {
    this.value = value ? value : undefined;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const node = new Node(value);
    this.top = node || null;
    this.length = 1;
    this.max_size = 5;
  }

  // *** PUSH operation
  // *** Time Complexity: O(1)
  push(value) {
    if (this.length >= this.max_size) {
      return "Stack over flow";
    } else {
      const node = new Node(value);
      // *** if stack is empty
      if (this.length === 0) {
        this.top = node;
        this.length = 1;
      } else {
        node.next = this.top;
        this.top = node;
        this.length++;
      }
      return this;
    }
  }

  // *** POP Operation
  // *** Time Complexity: O(1)
  pop() {
    if (this.length == 0) {
      return "Stack is empty";
    } else {
      let temp = this.top;
      this.top = this.top.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  // *** PEEK Operation
  // *** Time Complexity: O(1)
  peek() {
    if (!this.length) {
      return "Empty stack";
    } else {
      return this.top;
    }
  }

  // *** PRINT OPERATION
  // *** Time Compexity: O(n)
  print() {
    if (!this.length) {
      console.log("Empty stack");
    } else {
      let temp = this.top;
      while (temp) {
        console.log(temp.value);
        temp = temp.next;
      }
    }
  }
}

const myStack = new Stack(" ");
// myStack.push(11);
// myStack.push(13);
// myStack.print();

