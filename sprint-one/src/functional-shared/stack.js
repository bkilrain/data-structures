var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {
    stack: {},
    storage: {},
    syze: 0
  };
  
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push: function(value) {
    this.stack[this.syze] = value;
    this.syze++;
  },
  pop: function() {
    this.syze--;
    this.storage[this.syze] = this.stack[this.syze];
    delete this.stack[this.syze];
    return this.storage[this.syze];
  },
  size: function() {
    return Math.max(this.syze, 0);
  }
};


