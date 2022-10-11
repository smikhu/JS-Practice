// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = this.head;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (!this.head) return undefined;
//     let temp = this.head;
//     let pre = this.head;
//     while (temp.next) {
//       pre = temp;
//       temp = temp.next;
//     }
//     this.tail = pre;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//     return temp;
//   }

//   unshift(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   shift() {
//     if (!this.head) return undefined;
//     let temp = this.head;
//     this.head = this.head.next;
//     temp.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.tail = null;
//     }
//     return temp;
//   }

//   get(index) {
//     if (index < 0 || index >= this.length) {
//       return undefined;
//     }
//     let temp = this.head;
//     for (let i = 0; i < index; i++) {
//       temp = temp.next;
//     }
//     return temp;
//   }

//   set(index, value) {
//     let temp = this.get(index);
//     if (temp) {
//       temp.value = value;
//       return true;
//     }
//     return false;
//   }

//   insert(index, value) {
//     if (index === 0) return this.unshift(value);
//     if (index === this.length) return this.push(value);
//     if (index < 0 || index > this.length) return false;

//     const newNode = new Node(value);
//     const temp = this.get(index - 1);

//     newNode.next = temp.next;
//     temp.next = newNode;
//     this.length++;
//     return true;
//   }

//   remove() {
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();
//     if (index < 0 || index >= this.length) return undefined;

//     const before = this.get(index - 1);
//     const temp = before.next;

//     before.next = temp.next;
//     temp.next = null;
//     this.length--;
//     return temp;
//   }

//   reverse() {
//     let temp = this.head;
//     this.head = this.tail;
//     this.tail = temp;
//     let next = temp.next;
//     let prev = null;
//     for (let i = 0; i < this.length; i++) {
//       next = temp.next;
//       temp.next = prev;
//       prev = temp;
//       temp = next;
//     }
//     return this;
//   }
// }

// class Node2 {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//     this.prev = null;
//   }
// }

// class DoublyLinkedList {
//   constructor(value) {
//     const newNode = new Node2(value);
//     this.head = newNode;
//     this.tail = newNode;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node2(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       newNode.prev = this.tail;
//       this.tail = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (this.length === 0) return undefined;
//     let temp = this.tail;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.tail = this.tail.prev;
//       this.tail.next = null;
//       temp.prev = null;
//     }
//     this.length--;
//     return temp;
//   }

//   unshift(value) {
//     const newNode = new Node2(value);
//     if (this.length === 0) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head.prev = newNode;
//       this.head = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   shift() {
//     if (this.length === 0) return undefined;
//     let temp = this.head;
//     if (this.length === 1) {
//       this.head = null;
//       this.tail = null;
//     } else {
//       this.head = this.head.next;
//       this.head.prev = null;
//       temp.next = null;
//     }
//     this.length--;
//     return temp;
//   }

//   get(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     let temp = this.head;
//     if (index < this.length / 2) {
//       for (let i = 0; i < index; i++) {
//         temp = temp.next;
//       }
//     } else {
//       temp = this.tail;
//       for (let i = this.length - 1; i > index; i--) {
//         temp = temp.prev;
//       }
//     }
//     return temp;
//   }

//   set(index, value) {
//     let temp = this.get(index);
//     if (temp) {
//       temp.value = value;
//       return true;
//     }
//     return false;
//   }

//   insert(index, value) {
//     if (index === 0) return this.unshift(value);
//     if (index === this.length) return this.push(value);
//     if (index < 0 || index > this.length) return false;

//     const newNode = new Node2(value);
//     const before = this.get(index - 1);
//     const after = before.next;
//     before.next = newNode;
//     newNode.prev = before;
//     newNode.next = after;
//     after.prev = newNode;
//   }

//   remove(index) {
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();
//     if (index < 0 || index >= this.length) return undefined;

//     const temp = this.get(index);
//     temp.prev.next = temp.next;
//     temp.next.prev = temp.prev;
//     temp.next = null;
//     temp.prev = null;

//     this.length--;
//     return temp;
//   }
// }

// let myDoublyLinkedList = new DoublyLinkedList(7);
// myDoublyLinkedList;

// class Node3 {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor(value) {
//     const newNode = new Node3(value);
//     this.top = newNode;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node3(value);
//     if (this.length === 0) {
//       this.top = newNode;
//     } else {
//       newNode.next = this.top;
//       this.top = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   pop() {
//     if (this.length === 0) return undefined;

//     let temp = this.top;
//     this.top = this.top.next;
//     temp.next = null;

//     this.length--;
//     return temp;
//   }
// }

// let myStack = new Stack(0);
// myStack;

// class Node4 {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor(value) {
//     const newNode = new Node4(value);
//     this.first = newNode;
//     this.last = newNode;
//     this.length = 1;
//   }

//   enqueue(value) {
//     const newNode = new Node4(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//   }

//   dequeue() {
//     if (this.length === 0) return undefined;
//     let temp = this.first;
//     if (this.length === 1) {
//       this.first = null;
//       this.last = null;
//     } else {
//       this.first = this.first.next;
//       temp.next = null;
//     }
//     this.length--;
//     return temp;
//   }
// }

// let myQueue = new Queue(4);
// myQueue.enqueue(5);
// myQueue.enqueue(6);
// myQueue;

// class Node5 {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class BST {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newNode = new Node5(value);
//     if (this.root === null) {
//       this.root = newNode;
//       return this;
//     }
//     let temp = this.root;
//     while (true) {
//       if (newNode.value === temp.value) return undefined;
//       if (newNode.value < temp.value) {
//         if (temp.left === null) {
//           temp.left = newNode;
//           return this;
//         }
//         temp = temp.left;
//       } else {
//         if (temp.right === null) {
//           temp.right = newNode;
//           return this;
//         }
//         temp = temp.right;
//       }
//     }
//   }

//   contains(value) {
//     if (this.root === null) return false;
//     let temp = this.root;
//     while (temp) {
//       if (value < temp.value) {
//         temp = temp.left;
//       } else if (value > temp.value) {
//         temp = temp.right;
//       } else {
//         return true;
//       }
//     }
//     return false;
//   }

//   minValueNode(currentNode) {
//     while (currentNode.left != null) {
//       currentNode = currentNode.left;
//     }
//     return currentNode;
//   }
// }

// let myTree = new BST();
// myTree.insert(47);
// myTree.insert(21);
// myTree.insert(76);
// myTree.insert(18);
// myTree.insert(27);
// myTree.insert(52);
// myTree.insert(82);
// myTree.minValueNode(myTree.root.right);

// class HashTable {
//   constructor(size = 7) {
//     this.dataMap = new Array(size);
//   }

//   _hash(key) {
//     let hash = 0;
//     for (let i = 0; i < key.length; i++) {
//       hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
//     }
//     return hash;
//   }

//   set(key, value) {
//     let index = this._hash(key);
//     if (!this.dataMap[index]) {
//       this.dataMap[index] = [];
//     }
//     this.dataMap[index].push([key, value]);
//     return this;
//   }
// }

// let myHashTable = new HashTable();
// myHashTable;
