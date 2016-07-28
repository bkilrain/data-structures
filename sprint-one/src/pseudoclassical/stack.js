var Stack = function() {
  this.stack = {};
  this.storage = {};
  this.syze = 0;
};

Stack.prototype.push = function(value) {
  this.stack[this.syze] = value;
  this.syze++; 
};

Stack.prototype.pop = function() {
  this.syze--;
  this.storage[this.syze] = this.stack[this.syze];
  delete this.stack[this.syze];
  return this.storage[this.syze];
};

Stack.prototype.size = function() {
  return Math.max(this.syze, 0);
};
