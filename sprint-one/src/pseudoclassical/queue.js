var Queue = function() {
  this.syze = 0;
  this.keyIn = 0;
  this.keyOut = 0;
  this.queue = {};
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.queue[this.keyIn] = value;
  this.syze++;
  this.keyIn++;
};

Queue.prototype.dequeue = function() {
  var item = this.queue[this.keyOut];
  this.storage[this.keyOut] = item;
  delete this.queue[this.keyOut];
  this.keyOut++;
  this.syze--;
  return item;
};

Queue.prototype.size = function() {
  return Math.max(this.syze, 0);
};
