class Node {
  constructor(key, data = null, next = null) {
    this.key = key;
    this.data = data;
    this.next = next;
  }
}

module.exports = { Node };
