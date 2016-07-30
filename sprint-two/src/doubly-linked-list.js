var DoubleLinkedList = function() {
  var list = {};
  var counter = 0;
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = DLLNode(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      newNode.previous = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.addToHead = function(value) {
    var newNode = DLLNode(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.head.previous = newNode;
      newNode.next = list.head;
      list.head = list.head.previous;
    }
  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;
  };

  list.removeTail = function() {
    var removed = list.tail.value;
    list.tail = list.tail.previous;
    return removed;
  };

  list.contains = function(target) {
    var node = list.tail;
    while (node.value !== target && node !== list.head) {
      node = node.previous;
    }
    if (node.value === target) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var DLLNode = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?

addToTail complexity is O(1);
removeHead complexity is O(1);
contains complexity is O(n);

 */
