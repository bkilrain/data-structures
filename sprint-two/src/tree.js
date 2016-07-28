var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  result = false;
  var search = function(node) {
    if (node.value === target) {
      result = true;
    } else if (node.children.length) {
      for (var i = 0; i < node.children.length; i++) {
        search(node.children[i]);
      } 
    }
  };
  search(this);
  return result;
};



/*
 * Complexity: What is the time complexity of the above functions?

addchild complexity is O(1);
contains complexity is O(log(n))

 */
