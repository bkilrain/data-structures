var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.syze = 0;
  obj.stack = {};
  obj.storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.stack[this.syze] = value;
  this.syze++;
};

stackMethods.pop = function() {
  this.syze--;
  this.storage[this.syze] = this.stack[this.syze];
  delete this.stack[this.syze];
  return this.storage[this.syze];
};

stackMethods.size = function() {
  return Math.max(this.syze, 0);
};
