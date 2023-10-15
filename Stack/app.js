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
    this.head = node;
    this.tail = node;
    this.length = 1;
    this.max_size = 5;
  }

  // *** Push
  // *** Time Complexity: O(1)
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      if (this.max_size > this.length) {
        node.next = this.head;
        this.head = node;
        this.length++;
        return this;
      } else {
        return "Stack overflow";
      }
    }
  }

  // *** Pop
  // *** Time Complexity: O(1)
  pop(value) {
    if (!this.head) {
      return "Empty stack";
    } else {
      let temp = this.head;
      this.head = temp.next;
      temp.next = null;
      this.length--;
      return temp;
    }
  }

  // *** Peek
  // *** Time Complexity: O(1)
  peek() {
    return this.head ? this.head : undefined;
  }

  // *** isEmpty()
  // *** Time COmplexity: O(n)
  isEmpty() {
    return this.length ? false : true;
  }

  // *** isFull()
  // *** Time Complexity: O(1)
  isFull() {
    return this.max_size === this.length ? true : false;
  }

  // *** size()
  size() {
    return this.length;
  }
}

const myStack = new Stack(3);
myStack.push(5);
myStack.push(7);
myStack.push(8);
myStack.push(9);
console.log(myStack.size());
console.log(myStack);
