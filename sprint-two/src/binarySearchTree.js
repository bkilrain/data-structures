var BinarySearchTree = function(value) {
  var bst = {};
  bst.value = value;
  bst.left = {};
  bst.right = {};

  _.extend(bst, BinarySearchTreeMethods);
  return bst;  
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value) {
  var traverse = function(node) {
    if (Object.keys(node.left).length > 0 && node.value > value) {
      traverse(node.left);
    } else if (Object.keys(node.right).length > 0 && node.value < value) {
      traverse(node.right);
    } else if (node.value > value) {
      node.left = BinarySearchTree(value);
    } else if (node.value < value) {
      node.right = BinarySearchTree(value);
    }
  };
  traverse(this);
};

BinarySearchTreeMethods.contains = function(value) {
  results = false;

  var search = function(node) {
    if (node.value > value) {
      search(node.left);
    } else if (node.value < value) {
      search(node.right);
    } else if (node.value === value) {
      results = true;
    }
  };
  search(this);
  return results;
};

BinarySearchTreeMethods.depthFirstLog = function(callback, node) {
  node = node || this;
  if (Object.keys(node).length > 0) {
    callback(node.value);
    node.depthFirstLog(callback, node.left);
    node.depthFirstLog(callback, node.right);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(n);
 contains: O(n);
 depthFirstLog: O(n);
 */
