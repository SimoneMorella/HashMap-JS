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

}


const hashMap = new HashMap();

hashMap.set("simmi", "bellix");
hashMap.set("camila", "bellixima");
hashMap.set("simmi", "bellixximixximo");
hashMap.set("tamana", "halooo");
console.log(hashMap.has("camila"));
console.log(hashMap.has("bobobo"));
console.log(hashMap.get("simmi"));
console.log(hashMap.get("awe"));
// console.log(hashMap.remove("simmi"));
// console.log(hashMap.remove("camila"));
console.log(hashMap.length());
console.log(hashMap.bucketArray);
