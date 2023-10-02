/** @format */
class CreateNode {
  constructor(value) {
    this.val = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const node = new CreateNode(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  /**
   * 1. PUSH operation
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  push(value) {
    const node = new CreateNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length = 1;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
    return node;
  }

  /**
   * 2. POP operation
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  pop() {
    if (!this.head) {
      return null;
    } else {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
      } else {
        let temp = this.head;
        let prev = this.head;

        while (temp && temp.next) {
          prev = temp;
          temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        return temp;
      }
    }
  }

  /**
   * 3. UNSHIFT operation
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  unshift(value) {
    const node = new CreateNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.length++;
    } else {
      let temp = this.head;
      this.head = node;
      this.head.next = temp;
      this.length++;
      return this.head;
    }
  }

  /**
   * 4. SHIFT operation
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  shift() {
    if (!this.head) {
      return null;
    } else {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length = 0;
      } else {
        let temp = this.head;
        this.head = temp.next;
        this.length--;
        temp.next = null;
        return temp;
      }
    }
  }

  /**
   * 5. PRINT LINKEDLIST operation
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  print() {
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      while (temp) {
        console.log(temp);
        temp = temp.next;
      }
    }
  }

  /**
   * 6. GET HEAD operation
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  getHead() {
    if (!this.head) {
      return undefined;
    } else {
      return this.head;
    }
  }

  /**
   * 7. GET TAIL operation
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  getTail() {
    if (!this.head) {
      return undefined;
    } else {
      return this.tail;
    }
  }

  /**
   * 8. INSERT AT SPECIFIC POSITION operation
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  insertAt(index, value) {
    if (index < 0 || index > this.length) {
      return undefined;
    } else {
      // UNSHIFT operation
      if (index === 0) {
        this.unshift(value);
      }
      // PUSH operation
      else if (index === this.length) {
        this.push(value);
      } else {
        const node = new CreateNode(value);
        let i = 0;
        let temp = this.head;
        let prev = this.head;
        while (temp) {
          i++;
          temp = temp.next;
          if (i === index - 1) {
            prev = temp;
            break;
          }
        }
        node.next = temp.next;
        prev.next = node;
        this.length++;
        return node;
      }
    }
  }

  /**
   * 9. REMOVE AT SPECIFIC POSITION operation
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  removeAt(index) {
    if (index < 0 || index > this.length) {
      return undefined;
    } else {
      if (index === 0) {
        this.shift();
      } else if (index === this.length) {
        this.pop();
      } else {
        let temp = this.head;
        let prev = this.head;
        let i = 0;
        while (temp) {
          if (i == index) {
            prev.next = temp.next;
            this.length--;
            return temp;
          }
          prev = temp;
          temp = temp.next;
          i++;
        }
      }
    }
  }

  /**
   * 10. SEARCH operation
   * Time Complexity: O(n)
   * Space Complexity: O(n)
   */
  search(value) {
    if (!this.head) {
      return undefined;
    } else {
      let temp = this.head;
      let i = 0;
      while (temp) {
        if (temp.val === value) return i;
        temp = temp.next;
        i++;
      }
      return -1;
    }
  }

  /**
   * 11. CHECK ISEMPTY operation
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  isEmpty() {
    return !this.head ? true : false;
  }

  /*
  reverse() {
    let temp = this.head;
    let curr = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prev = null;
    let next = this.head;

    for (let i = 0; i < this.length; i++) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
  }
  */
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.unshift(0);
// myLinkedList.insertAt(0, 100);
// myLinkedList.insertAt(0, 200);
// myLinkedList.insertAt(5, 1000);
// myLinkedList.insertAt(2, 50);
// console.log(myLinkedList);

/**
 * Reverse a Linked List
 */
function reverseList(list) {
  let temp = list.head;
  let curr = list.head;
  list.head = list.tail;
  list.tail = temp;

  let prev = null;
  let next = list.head;

  for (let i = 0; i < this.length; i++) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
}

/**
 * Loop is present in Linked List
 */
function isLoop(list) {
  let fast = list.head;
  let slow = list.head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}

/**
 * Find Kth Node From End ( ** Interview Question)
 */
