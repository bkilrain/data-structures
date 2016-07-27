var Queue = function() {
  var obj = {
    queue: {},
    storage: {},
    syze: 0,
    keyIn: 0,
    keyOut: 0
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue: function(value) {
    this.queue[this.keyIn] = value;
    this.syze++;
    this.keyIn++;
  },
  dequeue: function() {
    var item = this.queue[this.keyOut];
    this.syze--;
    this.storage[this.keyOut] = item;
    this.keyOut++;
    return item;
  },
  size: function() {
    return Math.max(this.syze, 0);
  }
};


