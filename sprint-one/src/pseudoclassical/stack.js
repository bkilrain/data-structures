var Stack = function() {
  this.stack = {};
  this.storage = {};
  this.syze = 0;
};

Stack.prototype.push = function(value) {
  this.syze++;  
  this.stack[this.syze] = value;
  
};

Stack.prototype.pop = function() {
  this.storage[this.syze] = this.stack[this.syze];
  delete this.stack[this.syze];
  this.syze--;
  return this.storage[this.syze + 1];
};

Stack.prototype.size = function() {
  return Math.max(this.syze, 0);
};
