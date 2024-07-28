class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // create new node
    const newNode = new Node(val);

    // inserts new node at root of empty tree
    if (!this.root){
      this.root = newNode;
      return this;
    }

    // establish current node as root 
    let currentNode = this.root;

    while (currentNode){
      // if value is less than current node's value, go left
      if (val < currentNode.val){
        // if no left child, insert new node 
        if (!currentNode.left){
          currentNode.left = newNode;
          break;
        } else {
          // move to left child
          currentNode = currentNode.left;
        }
      } else {
        // if value is less than current node's value, go right
        if (val > currentNode.val){
          // if no right child, insert new node
          if (!currentNode.right){
            currentNode.right = newNode;
            break;
          } else {
            // move to right child
            currentNode = currentNode.right;
          }
        }
      }
    }
    // return tree
    return this; 
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    // helper function to insert value
    function insert(current, val){

      // Base Case
      if (!current){
        return new Node(val);
      }

      // Recursive Case
      if (val < current.val){
        current.left = insert(current.left, val);
      } else {
        current.right = insert(current.right, val);
      }
      return current;
    }

    // execute insertion process
    this.root = insert(this.root, val);

    // return tree
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    // empty tree
    if (!this.root) return undefined;

    let current = this.root;

    while (current){
      if (val === current.val){
        return current;
      } else if (val < current.val){
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    
    function find(current, val){
      // base case
      if (!current) return undefined;

      if (val === current.val){
        return current;
      };

      // recursive case
      if (val < current.val){
        return find(current.left, val);
      } else {
        return find(current.right, val);
      }
    }
    return find(this.root, val);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visitedNodes = [];

    function traverse(current){
      visitedNodes.push(current.val);
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
    }
    traverse(this.root);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visitedNodes = [];

    function traverse(current){
      if (current.left) traverse(current.left);
      visitedNodes.push(current.val);
      if (current.right) traverse(current.right);
    }
    traverse(this.root);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visitedNodes = [];

    function traverse(current){
      if (current.left) traverse(current.left);
      if (current.right) traverse(current.right);
      visitedNodes.push(current.val);
    }
    traverse(this.root);
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const visitedNodes = [];
    const queue = [] ; 

    if (this.root){
      queue.push(this.root);
    }

    while (queue.length > 0){
      let current = queue.shift();
      visitedNodes.push(current.val);
      if (current.left){
        queue.push(current.left);
      }
      if (current.right){
        queue.push(current.right);
      }
    }
    return visitedNodes;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    function removeNode(current, val){
      // base case
      if (!current) return null;

      // recursive case 
      // value is smaller than current
      if (val < current.val){
        // move left
        current.left = removeNode(current.left, val)
        //value is larger than current
      } else if (val > current.val){
        // move right
        current.right = removeNode(current.right, val)
      } else {
        // value is found, proceed to check for children
        // no children
        if (!current.left && !current.right) {
          return null;
          // left child present
        } else if (!current.left) {
          return current.right;
          // right child present
        } else if (!current.right) {
          return current.left;
          // both children present
        } else {
          const minRightNode = findMinNode(current.right);
          current.right = removeNode(current.right, minRightNode.val);
          current.val = minRightNode.val;
        }
      }
      return current; 
    }

    // helper function to find
    function findMinNode(node){
      while(node.left){
        node = node.left
      }
      return node;
    }

    this.root = (removeNode(this.root, val))
    return this;
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
