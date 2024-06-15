import LinkedList from "./linkedList.js";

class HashMap {
  constructor() {
    this.capacity = 16;
    this.loadFactor = 0.75;
    this.bucketArray = new Array(this.capacity).fill(null).map(() => new LinkedList());
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
    const hashOutput = this.hash(key);
    const bucket = this.bucketArray[hashOutput];
    if (bucket.size() === 0) {
      bucket.append(key, value);
    } else {
      let foundIndex = bucket.findKey(key);
      if (foundIndex === null) bucket.append(key, value);
      else bucket.at(foundIndex).value = value;
    }
    this.changeCapacity();
    console.log(bucket.toString())
  }

  has(key) {
    const hashOutput = this.hash(key);
    const bucket = this.bucketArray[hashOutput];
    return bucket.findKey(key) !== null ? true : false;
  }

  get(key) {
    if (this.has(key) === false) return null; 
    const hashOutput = this.hash(key);
    const bucket = this.bucketArray[hashOutput];
    const foundIndex = bucket.findKey(key);
    return bucket.at(foundIndex).value;
  }

  remove(key) {
    if (this.has(key) === false) return false;
    const hashOutput = this.hash(key);
    const bucket = this.bucketArray[hashOutput];
    const foundIndex = bucket.findKey(key);
    bucket.removeAt(foundIndex);
    return true;
  }

  length() {
    let count = 0;
    this.bucketArray.forEach((linkedList) => {
      count += linkedList.size();
    })
    return count;
  }

  clear() {
    this.bucketArray = new Array(this.capacity).fill(null).map(() => new LinkedList());
  }

  keys() {
    let keysArray = [];
    this.bucketArray.forEach((lList) => {
      for (let i = 0; i < lList.size(); i++) {
        keysArray.push(lList.at(i).key);
      }
    })
    return keysArray;
  }

  values() {
    let valuesArray = [];
    this.bucketArray.forEach((lList) => {
      for (let i = 0; i < lList.size(); i++) {
        valuesArray.push(lList.at(i).value);
      }
    })
    return valuesArray;
  }

  entries() {
    let nodesArray = [];
    this.bucketArray.forEach((lList) => {
      for (let i = 0; i < lList.size(); i++) {
        nodesArray.push([lList.at(i).key, lList.at(i).value]);
      }
    })
    return nodesArray;
  }

  changeCapacity() {
    if (this.length() >= this.capacity * this.loadFactor) {
      this.capacity = this.capacity * 2;
      const oldArray = [...this.bucketArray];
      this.bucketArray = new Array(this.capacity).fill(null).map(() => new LinkedList());
      for (const bucket of oldArray) {
        let node = bucket.head();
        while (node) {
          this.set(node.key, node.value);
          node = node.nextNode;
        }
      }
    }
  }

}


const hashMap = new HashMap();

hashMap.set("simmi", "bellix");
hashMap.set("camila", "bellixima");
hashMap.set("simmi", "bellixximixximo");
hashMap.set("tamana", "halooo");
hashMap.set("simmi1", "prova");
hashMap.set("simmi2", "prova");
hashMap.set("simmi3", "prova");
hashMap.set("simmi4", "prova");
hashMap.set("simmi5", "prova");
hashMap.set("simmi6", "prova");
hashMap.set("simmi7", "prova");
hashMap.set("simmi8", "prova");
hashMap.set("simmi9", "prova");
console.log(hashMap.has("camila"));
console.log(hashMap.has("bobobo"));
console.log(hashMap.get("simmi"));
console.log(hashMap.get("awe"));
// console.log(hashMap.remove("simmi"));
// console.log(hashMap.remove("camila"));
console.log(hashMap.length(), hashMap.loadFactor * hashMap.capacity)
// console.log(hashMap.length());
// console.log(hashMap.keys());
// console.log(hashMap.values());
// console.log(hashMap.entries());
console.log(hashMap.bucketArray);
