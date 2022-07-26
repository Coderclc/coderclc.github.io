# Data structure

## stack

**concept**

A stack is a linear structure, a fairly common data structure in computers.

The characteristic of the stack is that data can only be added or deleted at one end, following the principle of first-in, last-out

**accomplish**

Each data structure can be implemented in many ways. In fact, the stack can be regarded as a subset of the array, so here we use the array to implement

```javascript
class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    this.stack.pop()
  }
  peek() {
    return this.stack[this.getCount() - 1]
  }
  getCount() {
    return this.stack.length
  }
  isEmpty() {
    return this.getCount() === 0
  }
}
```

**Apply**

Selected the topic with serial number 20 on LeetCode

The meaning of the question is matching parentheses, which can be completed through the characteristics of the stack.

```javascript
var isValid = function (s) {
  let map = {
    '(': -1,
    ')': 1,
    '[': -2,
    ']': 2,
    '{': -3,
    '}': 3
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] < 0) {
      stack.push(s[i])
    } else {
      let last = stack.pop()
      if (map[last] + map[s[i]] != 0) return false
    }
  }
  if (stack.length > 0) return false
  return true
}
```

## queue

**concept**

The queue is a linear structure, characterized by adding data at one end and deleting data at the other end, following the principle of first-in, first-out.

**accomplish**

Here, two ways to implement queues will be explained, namely single-chain queues and circular queues.

single chain queue

```javascript
class Queue {
  constructor() {
    this.queue = []
  }
  enQueue(item) {
    this.queue.push(item)
  }
  deQueue() {
    return this.queue.shift()
  }
  getHeader() {
    return this.queue[0]
  }
  getLength() {
    return this.queue.length
  }
  isEmpty() {
    return this.getLength() === 0
  }
}
```

Because the single-chain queue requires O(n) time complexity when dequeuing, a circular queue is introduced. The dequeue operation of a circular queue is on average O(1) time complexity.

circular queue

```javascript
class SqQueue {
  constructor(length) {
    this.queue = new Array(length + 1)
    // team leader
    this.first = 0
    // end of line
    this.last = 0
    // current queue size
    this.size = 0
  }
  enQueue(item) {
    // Determine whether the tail + 1 is the head of the queue
    // If it is, it means that the array needs to be expanded
    // % this.queue.length is to prevent the array from going out of bounds
    if (this.first === (this.last + 1) % this.queue.length) {
      this.resize(this.getLength() * 2 + 1)
    }
    this.queue[this.last] = item
    this.size++
    this.last = (this.last + 1) % this.queue.length
  }
  deQueue() {
    if (this.isEmpty()) {
      throw Error('Queue is empty')
    }
    let r = this.queue[this.first]
    this.queue[this.first] = null
    this.first = (this.first + 1) % this.queue.length
    this.size--
    // Determine whether the current queue size is too small
    // To ensure that no space is wasted, when the queue space is equal to a quarter of the total length
    // and not 2, reduce the total length to half of the current
    if (this.size === this.getLength() / 4 && this.getLength() / 2 !== 0) {
      this.resize(this.getLength() / 2)
    }
    return r
  }
  getHeader() {
    if (this.isEmpty()) {
      throw Error('Queue is empty')
    }
    return this.queue[this.first]
  }
  getLength() {
    return this.queue.length - 1
  }
  isEmpty() {
    return this.first === this.last
  }
  resize(length) {
    let q = new Array(length)
    for (let i = 0; i < length; i++) {
      q[i] = this.queue[(i + this.first) % this.queue.length]
    }
    this.queue = q
    this.first = 0
    this.last = this.size
  }
}
```

## linked list

**concept**

The linked list is a linear structure, and it is also a natural recursive structure. The linked list structure can make full use of computer memory space and realize flexible dynamic memory management. However, the linked list loses the advantage of random reading of the array. At the same time, the linked list has a relatively large space overhead due to the increase of the pointer field of the node.

**accomplish**

Singly linked list

```javascript
class Node {
  constructor(v, next) {
    this.value = v
    this.next = next
  }
}
class LinkList {
  constructor() {
    // linked list length
    this.size = 0
    // virtual header
    this.dummyNode = new Node(null, null)
  }
  find(header, index, currentIndex) {
    if (index === currentIndex) return header
    return this.find(header.next, index, currentIndex + 1)
  }
  addNode(v, index) {
    this.checkIndex(index)
    // When inserting to the end of the linked list, prev.next is empty
    // In other cases, because the node is to be inserted, the inserted node
    // next should be prev.next
    // Then set prev.next to the inserted node
    let prev = this.find(this.dummyNode, index, 0)
    prev.next = new Node(v, prev.next)
    this.size++
    return prev.next
  }
  insertNode(v, index) {
    return this.addNode(v, index)
  }
  addToFirst(v) {
    return this.addNode(v, 0)
  }
  addToLast(v) {
    return this.addNode(v, this.size)
  }
  removeNode(index, isLast) {
    this.checkIndex(index)
    index = isLast ? index - 1 : index
    let prev = this.find(this.dummyNode, index, 0)
    let node = prev.next
    prev.next = node.next
    node.next = null
    this.size--
    return node
  }
  removeFirstNode() {
    return this.removeNode(0)
  }
  removeLastNode() {
    return this.removeNode(this.size, true)
  }
  checkIndex(index) {
    if (index < 0 || index > this.size) throw Error('Index error')
  }
  getNode(index) {
    this.checkIndex(index)
    if (this.isEmpty()) return
    return this.find(this.dummyNode, index, 0).next
  }
  isEmpty() {
    return this.size === 0
  }
  getSize() {
    return this.size
  }
}
```

- a list of multiple elements
- The storage of elements is not continuous and is linked by the next pointer
- Add or delete array -> subscript
- Add or delete linked list -> change.next
- Delete the linked list and replace it with the next deleted value, replace next.next, you cannot directly change this to this.next
- Invert

- next.next = prev prev = next pointer iteration forward reverse eg 2 point to the previous village 1 save 2
- return new head next.next.next = next next = null The function recurses to the end of the linked list eg 5 points to 4 and interrupts the next of 4

- Delete repeated iteration to judge next.val === next.next.val? The same changes the pointer, otherwise move the pointer
- Circular linked list

- Hash table
- Fast and slow pointers in the race of the tortoise and the hare, if there is a ring, the fast pointer will surely catch up with the slow pointer

## Tree

binary tree

Trees have many structures. Binary tree is the most commonly used structure in trees, and it is also a natural recursive structure.

A binary tree has a root node, and each node has at most two child nodes, namely: the left node and the right node. The bottom node of the tree is called a leaf node. When the number of leaves of a tree is full, the tree can be called a full fork tree.

binary search tree

A binary search tree is also a binary tree and has the characteristics of a binary tree. But the difference is that the value of each node of the binary search tree is larger than the value of its left subtree, and smaller than the value of the right subtree.

This storage method is very suitable for data search. Because the value to be searched is larger than the value of the root node, it only needs to be searched on the right subtree of the root node, which greatly improves the search efficiency.

**accomplish**

```javascript
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class BST {
  constructor() {
    this.root = null
    this.size = 0
  }
  getSize() {
    return this.size
  }
  isEmpty() {
    return this.size === 0
  }
  addNode(v) {
    this.root = this._addChild(this.root, v)
  }
  // When adding a node, you need to compare the added node value with the current
  // size of node value
  _addChild(node, v) {
    if (!node) {
      this.size++
      return new Node(v)
    }
    if (node.value > v) {
      node.left = this._addChild(node.left, v)
    } else if (node.value < v) {
      node.right = this._addChild(node.right, v)
    }
    return node
  }
}
```

The above is the most basic binary search tree implementation, and then the tree traversal is implemented.

For tree traversal, there are three traversal methods, namely pre-order traversal, in-order traversal, and post-order traversal. The difference between the three traversals is when the nodes are visited. In the process of traversing the tree, each node will be traversed three times, traversing to itself, traversing the left subtree and traversing the right subtree. If you need to implement preorder traversal, you only need to perform the operation when the node is traversed for the first time.

The following are all recursive implementations, if you want to learn non-recursive implementations,

```javascript
// Preorder traversal can be used to print the structure of the tree
// Preorder traversal first visits the root node, then the left node, and finally the right node.
preTraversal() {
this._pre(this.root) }
_pre(node) {
if (node) {
console.log(node.value)
this._pre(node.left)
this._pre(node.right)
}
}
// Inorder traversal can be used for sorting
// For BST, in-order traversal can be implemented in one traversal
// get sorted values
// Inorder traversal means visiting the left node first, then the root node, and finally the right node.
midTraversal() {
this._mid(this.root) }
_mid(node) {
if (node) {
this._mid(node.left)
console.log(node.value)
this._mid(node.right)
}
}
// Postorder traversal can be used to operate on child nodes first
// The scene of operating the parent node again
// Postorder traversal means visiting the left node first, then the right node, and finally the root node.
backTraversal() {
this._back(this.root) }
_back(node) {
if (node) {
this._back(node.left)
this._back(node.right)
console.log(node.value)
}
}
```

The above traversal can be called deep traversal, and the corresponding traversal is called extensive traversal, which is to traverse the tree layer by layer. For extensive traversal, we need to use the queue structure discussed earlier.

```javascript
breadthTraversal() {
if (!this.root) return null
let q = new Queue()
// enqueue the root node
q.enQueue(this.root)
// Loop to determine whether the queue is empty, it is empty
// Indicates that the tree traversal is complete
while (!q.isEmpty()) {
// Dequeue the team to determine whether there are left and right subtrees
// If there is, enter the queue from left to right
let n = q.deQueue()
console.log(n.value)
if (n.left) q.enQueue(n.left)
if (n.right) q.enQueue(n.right)
}
}
```

Next, we will introduce how to find the minimum or maximum number in a tree. Because of the characteristics of binary search trees, the minimum value must be at the leftmost of the root node, and the maximum value is opposite.

```javascript
getMin() {
return this._getMin(this.root).value
}
_getMin(node) {
if (!node.left) return node
return this._getMin(node.left) }
getMax() {
return this._getMax(this.root).value
}
_getMax(node) {
if (!node.right) return node
return this._getMin(node.right) }
```

Rounding up and rounding down, these two operations are opposite, so the code is also similar, here only how to round down. Since it is rounded down, according to the characteristics of the binary search tree, the value must be on the left side of the root node. Just keep traversing the left subtree until the value of the current node is no longer greater than or equal to the required value, and then determine whether the node still has a right subtree. If there is, continue the recursive judgment above.

```javascript
floor(v) {
let node = this._floor(this.root, v)
return node ? node.value : null
}
_floor(node, v) {
if (!node) return null
if (node.value === v) return v
// If the current node value is larger than the required value, continue recursion
if (node.value > v) {
return this._floor(node.left, v)
}
// Determine if the current node has a right subtree
let right = this._floor(node.right, v)
if (right) return right
return node
}
```

Ranking, which is used to get the rank of a given value or the value of the second-ranked node, these two operations are also opposite, so this only describes how to get the value of the second-ranked node. For this operation, we need to modify the code slightly so that each node has a size property. This property indicates how many child nodes (including itself) there are under this node.

```javascript
class Node {
constructor(value) {
this.value = value
this.left = null
this.right = null
// modify the code
this.size = 1
}
}
// add code
_getSize(node) {
return node ? node.size : 0 }
_addChild(node, v) {
if (!node) {
return new Node(v)
}
if (node.value > v) {
// modify the code
node.size++
node.left = this._addChild(node.left, v)
} else if (node.value < v) {
// modify the code
node.size++
node.right = this._addChild(node.right, v)
}
return node
}
select(k) {
let node = this._select(this.root, k)
return node ? node.value : null
}
_select(node, k) {
if (!node) return null
// First get several nodes under the left subtree
let size = node.left ? node.left.size : 0
// Determine whether size is greater than k
// If it is greater than k, it means that the required node is on the left node
if (size > k) return this._select(node.left, k)
// If less than k, it means the desired node is on the right node
// Note that k needs to be recalculated here, minus the number of nodes in the root node except the right subtree
if (size < k) return this._select(node.right, k - size - 1)
return node
}
```

- Next is the hardest part of binary search trees: deleting nodes. Because for deleting nodes, there will be the following situations
- The node to be deleted has no subtree
- The node to be deleted has only one subtree
- The node to be deleted has two left and right trees

It is easy to solve the first two cases, but the third case is difficult, so let’s implement a relatively simple operation first: delete the smallest node. For deleting the smallest node, there is no third case. The operation of deleting the largest node is the opposite of deleting the smallest node, so it will not be repeated here.

```javascript
delectMin() {
this.root = this._delectMin(this.root)
console.log(this.root) }
_delectMin(node) {
// keep recursive left subtree
// If the left subtree is empty, determine whether the node has a right subtree
// If there is a right subtree, replace the node that needs to be deleted with the right subtree
if ((node != null) & !node.left) return node.right
node.left = this._delectMin(node.left)
// Finally, the `size` of the next node needs to be re-maintained
node.size = this._getSize(node.left) + this._getSize(node.right) + 1
return node
}
```

The last thing to explain is how to delete any node. For this operation, T. Hibbard in 1962 proposed a solution to this problem, that is, how to solve the third case. When this happens, the successor node of the current node (that is, the smallest node of the right subtree of the current node) needs to be taken out to replace the node that needs to be deleted. Then assign the left subtree of the node to be deleted to the successor node, and assign the right subtree to it after deleting the successor node.

If you are in doubt about this solution, consider it this way. Because of the nature of binary search trees, the parent node must be larger than all left child nodes and smaller than all right child nodes. Then, when the parent node needs to be deleted, a node larger than the parent node must be taken out to replace the parent node. This node must not exist in the left subtree, but must exist in the right subtree. Then you need to keep the parent node smaller than the right child node, then you can take out the smallest node in the right subtree to replace the parent node.

```javascript
delect(v) {
this.root = this._delect(this.root, v) }
_delect(node, v) {
if (!node) return null
// The searched node is smaller than the current node, go to the left subtree to find
if (node.value < v) {
node.right = this._delect(node.right, v)
} else if (node.value > v) {
// The searched node is larger than the current node, go to the right subtree to find
node.left = this._delect(node.left, v)
} else {
// Entering this condition indicates that the node has been found
// First determine whether the node has one of the left and right subtrees
// If yes, return the subtree, which is the same as `_delectMin`
if (!node.left) return node.right
if (!node.right) return node.left
// Entering here, it means that the node has left and right subtrees
// First take out the successor node of the current node, that is, take the minimum value of the right subtree of the current node
let min = this._getMin(node.right)
// After taking the minimum value, delete the minimum value
// Then assign the subtree after deleting the node to the minimum node
min.right = this._delectMin(node.right)
// left subtree does not move
min.left = node.left
node = min
}
// maintain size
node.size = this._getSize(node.left) + this._getSize(node.right) + 1
return node
}
```
