/* eslint-disable no-plusplus */
const { Node } = require('./node');

// eslint-disable-next-line import/prefer-default-export
class LinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }

  append(key, value) {
    const newNode = new Node(key, value);
    if (this.head != null) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  prepend(key, value) {
    const newNode = new Node(key, value);
    if (this.head != null) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }

  size() {
    if (this.head == null) {
      return 0;
    }
    let i = 1;
    let currentNode = this.head;
    while (currentNode.next != null) {
      i++;
      currentNode = currentNode.next;
    }
    return i;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    let currentNode = this.head;
    if (index >= this.size()) {
      return null;
    }
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    let currentNode = this.head;
    while (currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    }
    if (currentNode.next === this.tail) {
      this.tail = currentNode;
      currentNode.next = null;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== this.tail) {
      if (currentNode.data === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    if (currentNode !== this.tail) {
      if (currentNode.data === value) {
        return true;
      }
    }
    return false;
  }

  find(key) {
    if (this.head != null) {
      let currentNode = this.head;
      let index = -1;
      while (currentNode !== this.tail) {
        index++;
        if (currentNode.key === key) {
          return index;
        }
        currentNode = currentNode.next;
      }
      if (currentNode === this.tail) {
        index++;
        if (currentNode.key === key) {
          return index;
        }
      }
    }
    return null;
  }

  toString() {
    let currentNode = this.head;
    let linkedListString = '';
    while (currentNode !== this.tail) {
      linkedListString = `${linkedListString}( Key: ${currentNode.key}, Value: ${currentNode.data} ) -> `;
      currentNode = currentNode.next;
    }
    if (currentNode === this.tail) {
      linkedListString = `${linkedListString}( Key: ${currentNode.key}, Value: ${currentNode.data} ) -> null`;
    }
    return linkedListString;
  }

  insertAt(key, value, index) {
    const newNode = new Node(key, value);
    if (this.at(index) != null) {
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        const insertAfterThisNode = this.at(index - 1);
        const insertBeforeThisNode = this.at(index);
        insertAfterThisNode.next = newNode;
        newNode.next = insertBeforeThisNode;
      }
    } else if (index === this.size()) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      console.log('Error: Empty Node not linked');
    }
  }

  remove(key) {
    const removeIndex = this.find(key);
    if (removeIndex != null) {
      if (removeIndex === 0) {
        this.head = this.at(removeIndex + 1);
      } else if (removeIndex === this.size() - 1) {
        this.tail = this.at(removeIndex - 1);
        this.tail.next = null;
      } else {
        const previousNode = this.at(removeIndex - 1);
        const nextNode = this.at(removeIndex + 1);
        previousNode.next = nextNode;
      }
      return true;
    }
    return false;
  }

  // eslint-disable-next-line consistent-return
  getKeys() {
    const keys = [];
    if (this.head != null) {
      let currentNode = this.head;
      while (currentNode !== this.tail) {
        keys.push(currentNode.key);
        currentNode = currentNode.next;
      }
      if (currentNode === this.tail) {
        keys.push(currentNode.key);
      }
      return keys;
    }
    return [];
  }

  getValues() {
    const values = [];
    if (this.head != null) {
      let currentNode = this.head;
      while (currentNode !== this.tail) {
        values.push(currentNode.data);
        currentNode = currentNode.next;
      }
      if (currentNode === this.tail) {
        values.push(currentNode.data);
      }
      return values;
    }
    return [];
  }

  getEntries() {
    const entries = [];
    if (this.head != null) {
      let currentNode = this.head;
      while (currentNode !== this.tail) {
        entries.push([currentNode.key, currentNode.data]);
        currentNode = currentNode.next;
      }
      if (currentNode === this.tail) {
        entries.push([currentNode.key, currentNode.data]);
      }
      return entries;
    }
    return [];
  }
}

module.exports = { LinkedList };
