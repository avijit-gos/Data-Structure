/** @format */

// *** Class for creating a new Linked list node
class Node {
  constructor(value) {
    this.prev = null;
    this.value = value;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  /**
   * PUSH operation
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
      this.length++;
    }
  }

  /**
   * POP operation
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  pop() {
    if (!this.head) {
      return null;
    } else if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let temp = this.tail.prev;
      this.tail.prev.next = null;
      this.tail.prev = null;
      this.tail = temp;
      this.length--;
    }
  }

  /**
   * UNSHIFT operation
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  /**
   * SHIFT operation
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  shift() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let temp = this.head.next;
      this.head.next.prev = null;
      this.head.next = null;
      this.head = temp;
      this.length--;
    }
  }

  /**
   * GET operation
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  get(index) {
    if (index < 0 && index > this.length) {
      return undefined;
    } else if (index === 0) {
      return this.head;
    } else if (index === this.length) {
      return this.tail;
    } else {
      let temp = this.head;
      let i = 0;
      while (temp) {
        if (i === index) {
          return temp;
        }
        temp = temp.next;
        i++;
      }
    }
  }

  /**
   * SET operation
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  set(index, value) {
    if (index < 0 && index > this.length) {
      return undefined;
    } else if (index === 0) {
      this.head.value = value;
      return this;
    } else if (index === this.length) {
      this.tail.value = value;
      return this;
    } else {
      let temp = this.head;
      let i = 0;
      while (temp) {
        if (index === i) {
          temp.value = value;
        }
        temp = temp.next;
        i++;
      }
      return this;
    }
  }

  /**
   * INSERT OPERATION
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  insertAt(index, value) {
    if (index < 0 && this.length > index) {
      console.log("Not accepted");
      return undefined;
    } else if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let temp = this.head;
      let i = 0;
      const node = new Node(value);
      while (temp) {
        if (index === i) {
          temp.prev.next = node;
          node.prev = temp.prev;
          node.next = temp;
          temp.prev = node;
          this.length++;
        }
        temp = temp.next;
        i++;
      }
    }
  }

  /**
   * REMOVE  OPERATION
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  removeAt(index) {
    if (index < 0 && index > this.length) {
      return null;
    } else if (index === 0) {
      this.shift();
    } else if (index === this.length) {
      this.pop();
    } else {
      let temp = this.head;
      let i = 0;
      while (temp) {
        if (i === index) {
          temp.prev.next = temp.next;
          temp.next.prev = temp.prev;
          temp.prev = null;
          temp.next = null;
          this.length--;
        }
        temp = temp.next;
        i++;
      }
    }
  }
}

const myDoublyLinkedList = new DoublyLinkedList(7);
myDoublyLinkedList.push(3);
myDoublyLinkedList.unshift(99);
// myDoublyLinkedList.shift();
myDoublyLinkedList.insertAt(1, 10);
myDoublyLinkedList.removeAt(1);
console.log(myDoublyLinkedList);
