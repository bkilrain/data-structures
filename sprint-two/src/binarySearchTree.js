var BinarySearchTree = function(value) {
  var bst = {};
  bst.value = value;
  bst.left = {};
  bst.right = {};

  _.extend(bst, BinarySearchTreeMethods);
  return bst;  
};

var BinarySearchTreeMethods = {};

BinarySearchTreeMethods.insert = function(value, node) {
  node = node || this;
  if (node.value > value) {
    if (Object.keys(node.left).length > 0) {
      node.insert(value, node.left);
    } else {
      node.left = BinarySearchTree(value);
    }
  } else if (node.value < value) {
    if (Object.keys(node.right).length > 0) {
      node.insert(value, node.right);
    } else {
      node.right = BinarySearchTree(value);
    }
  }
};

BinarySearchTreeMethods.contains = function(value, node, result) {
  result = result || false;
  node = node || this;
  if (node.value > value) {
    result = node.contains(value, node.left, result);
  } else if (node.value < value) {
    result = node.contains(value, node.right, result);
  } else if (node.value === value) {
    return true;
  }
  return result;
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
