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

//   get(key) {
//     let index = this._hash(key);
//     if (this.dataMap[index]) {
//       for (let i = 0; i < this.dataMap[index].length; i++) {
//         if (this.dataMap[index][i][0] === key) {
//           return this.dataMap[index][i][1];
//         }
//       }
//     }
//     return undefined;
//   }

//   keys() {
//     let allKeys = [];
//     for (let i = 0; i < this.dataMap.length; i++) {
//       if (this.dataMap[i]) {
//         for (let j = 0; j < this.dataMap[i].length; j++) {
//           allKeys.push(this.dataMap[i][j][0]);
//         }
//       }
//     }
//     return allKeys;
//   }
// }

// let myHashTable = new HashTable();
// myHashTable;

// class Graph {
//   constructor() {
//     this.adjacencyList = {};
//   }

//   addVertex(vertex) {
//     if (!this.adjacencyList[vertex]) {
//       this.adjacencyList[vertex] = [];
//       return true;
//     }
//     return false;
//   }

//   addEdge(vertex1, vertex2) {
//     if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//       this.adjacencyList[vertex1].push(vertex2);
//       this.adjacencyList[vertex2].push(vertex1);
//       return true;
//     }
//     return false;
//   }

//   removeEdge(vertex1, vertex2) {
//     if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
//       this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
//         (v) => v !== vertex2
//       );
//       this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
//         (v) => v !== vertex1
//       );
//       return true;
//     }
//     return false;
//   }

//   removeVertex(vertex) {
//     if (!this.adjacencyList[vertex]) return undefined;
//     while (this.adjacencyList[vertex].length) {
//       let temp = this.adjacencyList[vertex].pop();
//       this.removeEdge(vertex, temp);
//     }
//     delete this.adjacencyList[vertex];
//     return this;
//   }
// }

// let myGraph = new Graph();
// myGraph.addVertex("A");
// myGraph.addVertex("B");
// myGraph.addVertex("C");
// myGraph.addVertex("D");
// myGraph.addEdge("A", "B");
// myGraph.addEdge("A", "C");
// myGraph.addEdge("A", "D");
// myGraph.addEdge("B", "D");
// myGraph.addEdge("C", "D");
// myGraph;

// function bubbleSort(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (array[j] > array[j + 1]) {
//         let temp = array[j];
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//       }
//     }
//   }
//   return array;
// }

// bubbleSort([4, 2, 6, 5, 1, 3]);

// function selectionSort(array) {
//   let min;
//   for (let i = 0; i < array.length - 1; i++) {
//     min = i;
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[min]) min = j;
//     }
//     if (i !== min) {
//       let temp = array[i];
//       array[i] = array[min];
//       array[min] = temp;
//     }
//   }
//   return array;
// }

// selectionSort([4, 2, 6, 5, 1, 3, 8, 7, 10, 9]);

// function insertionSort(array) {
//   let temp;
//   for (let i = 1; i < array.length; i++) {
//     temp = array[i];
//     for (var j = i - 1; array[j] > temp && j > -1; j--) {
//       array[j + 1] = array[j];
//     }
//     array[j + 1] = temp;
//   }
//   return array;
// }

// insertionSort([4, 2, 6, 5, 1, 3]);

function merge(array1, array2) {
  let combined = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}

merge([1, 3, 7, 8], [2, 4, 5, 6]);


function mergeSort(array) {
    if (array.length === 1) return array

    let mid = Math.floor(array.length/2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

mergeSort([3, 1, 4, 2])