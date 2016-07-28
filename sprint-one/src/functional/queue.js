var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var keyIn = 0;
  var keyOut = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {    
    size++;
    keyIn++;
    someInstance[keyIn] = value;
  };

  someInstance.dequeue = function() {
    size--;
    keyOut++;
    storage[keyOut] = someInstance[keyOut];
    delete someInstance[keyOut];
    return storage[keyOut];
  };

  someInstance.size = function() {
    return Math.max(size, 0);
  };

  return someInstance;
};
