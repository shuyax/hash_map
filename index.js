/* eslint-disable no-plusplus */
const { LinkedList } = require('./linked_list');

class HashMap {
  constructor(size) {
    this.map = new Array(size).fill(null).map(() => new LinkedList());
  }

  // eslint-disable-next-line class-methods-use-this
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % 16;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this.hash(key);
    const previousIndex = this.map[index].find(key);
    if (previousIndex != null) {
      this.map[index].at(previousIndex).data = value;
    } else {
      this.map[index].append(key, value);
    }
    console.table(this.map[index]);
  }

  get(key) {
    const mapIndex = this.hash(key);
    const keyIndex = this.map[mapIndex].find(key);
    if (keyIndex != null) {
      return this.map[mapIndex].at(keyIndex).data;
    }
    return null;
  }

  has(key) {
    const mapIndex = this.hash(key);
    const keyIndex = this.map[mapIndex].find(key);
    if (keyIndex != null) {
      return true;
    }
    return false;
  }

  remove(key) {
    const mapIndex = this.hash(key);
    this.map[mapIndex].remove(key);
    console.table(this.map[mapIndex]);
  }

  length() {
    let len = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const bucket of this.map) {
      len += bucket.size();
    }
    return len;
  }

  clear() {
    this.map = [];
  }

  keys() {
    let allKeys = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const bucket of this.map) {
      allKeys = allKeys.concat(bucket.getKeys());
    }
    return allKeys;
  }

  values() {
    let allValues = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const bucket of this.map) {
      allValues = allValues.concat(bucket.getValues());
    }
    return allValues;
  }

  entries() {
    let allEntries = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const bucket of this.map) {
      allEntries = allEntries.concat(bucket.getEntries());
    }
    return allEntries;
  }
}

const myHashMap = new HashMap(16);
// console.log(myHashMap.hash('Carlos'));
// console.log(myHashMap.hash('Carlau'));

myHashMap.set('Carlos', 'Carlos Nola B');
myHashMap.set('Carlos', 'Carlos Nola C');
myHashMap.set('Carlau', 'Nola A');
console.log(myHashMap.keys());
console.log(myHashMap.values());
console.log(myHashMap.entries());
console.log(myHashMap.has('Carlau'));
console.log(myHashMap.length());
myHashMap.remove('Carlau');
console.log(myHashMap.has('Carlau'));
console.log(myHashMap.length());
console.log(myHashMap.keys());
console.log(myHashMap.values());
console.log(myHashMap.entries());
// myHashMap.clear();
// console.log(myHashMap.length());
