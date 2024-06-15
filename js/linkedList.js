import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this.linkedHead = null;
  }

  prepend(key, value) {
    let temp = null;
    if (this.linkedHead !== null) temp = this.linkedHead;
    this.linkedHead = new Node(key, value);
    this.linkedHead.nextNode = temp;
  }

  append(key, value) {
    if (this.linkedHead === null) this.prepend(key, value);
    else {
      let temp = this.linkedHead;
      while (temp.nextNode !== null) temp = temp.nextNode;
      temp.nextNode = new Node(key, value);
    }
  }

  size() {
    let count = 0;
    let temp = this.linkedHead;
    while (temp !== null) {
      count++;
      temp = temp.nextNode;
    }
    return count;
  }

  head() {
    return this.linkedHead;
  }

  tail() {
    let temp = this.linkedHead;
    while (temp.nextNode !== null) temp = temp.nextNode;
    return temp;
  }

  at(index) {
    let temp = this.linkedHead;
    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
      if (temp === null) return "No item for this index";
    }
    return temp;
  }

  pop() {
    let curr = this.linkedHead;
    let prev = null;
    while (curr.nextNode !== null) {
        prev = curr;
        curr = curr.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let temp = this.linkedHead;
    while (temp.nextNode !== null) {
        if (temp.value === value) return true;
        temp = temp.nextNode;
    }
    return false;
  }

  containsKey(key) {
    let temp = this.linkedHead;
    while (temp.nextNode !== null) {
        if (temp.key === key) return true;
        temp = temp.nextNode;
    }
    return false;
  }

  find(value) {
    let temp = this.linkedHead;
    let index = 0;
    while (temp !== null) {
        if (temp.value === value) return index;
        temp = temp.nextNode;
        index++;
    }
    return null;
  }

  findKey(key) {
    let temp = this.linkedHead;
    let index = 0;
    while (temp !== null) {
        if (temp.key === key) return index;
        temp = temp.nextNode;
        index++;
    }
    return null;
  }

  toString() {
    let temp = this.linkedHead;
    let string = "";
    while (temp !== null) {
        string += `(${temp.key}:${temp.value}) ->`;
        temp = temp.nextNode;
    }
    return(string += "null");
  }

  insertAt(key, value, index) {
    if (this.linkedHead === null) this.prepend(key, value);
    else {
        let curr = this.linkedHead;
        let prev = null;
        let newNode = new Node(key, value);
        for (let i = 0; i < index; i++) {
            prev = curr;
            curr = curr.nextNode;
            if (curr === null) break;
        }
        prev.nextNode = newNode;
        newNode.nextNode = curr;
    }
  }

  removeAt(index) {
    if (this.linkedHead === null) return "List already empty";
    let curr = this.linkedHead;
    let prev = null;
    for (let i = 0; i < index; i++) {
        prev = curr;
        curr = curr.nextNode;
        if (curr === null) return "No item at the selected index";
    }
    if (index !== 0) prev.nextNode = curr.nextNode;
    else this.linkedHead = null;
  }

}
