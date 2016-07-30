var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    size--;
    var val = storage[size];
    delete storage[size];
    return val;
  };

  someInstance.size = function() {
    return Math.max(0, size);
  };

  return someInstance;
};
