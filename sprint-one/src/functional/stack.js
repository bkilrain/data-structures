var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance[size] = value;
    size++;
  };

  someInstance.pop = function() {
    size--;
    storage[size] = someInstance[size];
    delete someInstance[size];
    return storage[size];
  };

  someInstance.size = function() {
    return Math.max(0, size);
  };

  return someInstance;
};
