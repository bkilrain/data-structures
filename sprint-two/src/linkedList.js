var LinkedList = function() {
  var list = {};
  var counter = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.contains = function(target) {
    var node = list.head;
    while (node.value !== target && node !== list.tail) {
      node = node.next;
    }
    if (node.value === target) {
      return true;
    } else {
      return false;
    }

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

addToTail complexity is O(1);
removeHead complexity is O(1);
contains complexity is O(n);

 */
