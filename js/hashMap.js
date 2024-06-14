import LinkedList from "./linkedList.js";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.bucketArray = new Array(this.capacity).fill(new LinkedList())
  }

  hash(key) {
    let hashCode = 0;
      
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
 
    return hashCode;
  }

  set(key, value) {
    const hashOutput = hash(key);
    if (this.bucketArray[hashOutput].size() !== 0) {
      // problem with key value pair in adding a node (node should have 2 stuff but then I have to change everything... maybe I can modify it later)
    }
  }
}
