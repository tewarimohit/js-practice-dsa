// **Hash Table/ Hash Map**: Data structure used to store key value pair.
// Given a key, you can associate a value with that key for very fast lookup.
// JS Object is special implementation of hash table.
// Object class adds  its own keys. Keys you may put may contradict, override default keys.
// Strings in an index to numbers in an index
// hash function comes into picture it accepts string key converts it into hash code using defined logic and maps it into numeric index that is within the bounds of an array.
// using the index we store the value.
// the same hashing function is reused to retrive the value given a key.
// 3 functions:
// Set to store a key value pair.
// Get to retrieve a value given its key.
// remove to delete a key value pair.

// uses: where constant time lookup and insertion is required ex database indexing and caches

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    // buggy (Hash collision) key name,mane will have same key as hash value is same
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    return (this.table[index] = value);
  }

  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }

  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("First name", "Mohit");
table.set("Last name", "Tewari");
table.set("age", 30);
table.set("Address", "Home");
table.set(" id", "20");
table.display();
console.log(table.get("Last name"));
table.remove("Address");
table.display();
