var Stack = function() {
  var obj = Object.create(stackMethods);
  obj.syze = 0;
  obj.stack = {};
  obj.storage = {};
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.syze++;
  this.stack[this.syze] = value;
};

stackMethods.pop = function() {
  this.storage[this.syze] = this.stack[this.syze];
  this.syze--;
  return this.storage[this.syze + 1];
};

stackMethods.size = function() {
  return Math.max(this.syze, 0);
};

/*
var Stack = function() {
  var obj = Object.create(Stack.prototype);
  obj.syze = 0;
  obj.stack = {};
  obj.storage = {};
  return obj;
};

var stackMethods = {};

Stack.prototype.push = function(value) {
  this.syze++;
  this.stack[this.syze] = value;
};

Stack.prototype.pop = function() {
  this.storage[this.syze] = this.stack[this.syze]
  this.syze--;
};

Stack.prototype.size = function() {
  return Math.max(this.syze, 0);
};*/