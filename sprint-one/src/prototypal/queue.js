var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.queue = {};
  obj.storage = {};
  obj.syze = 0;
  obj.keyIn = 0;
  obj.keyOut = 0;
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.queue[this.keyIn] = value;
  this.keyIn++;
  this.syze++;
};

queueMethods.dequeue = function() {
  var item = this.queue[this.keyOut];
  this.storage[this.keyOut] = item;
  delete this.queue[this.keyOut];
  this.syze--;
  this.keyOut++;
  return item;
};

queueMethods.size = function() {
  return Math.max(this.syze, 0);
};
