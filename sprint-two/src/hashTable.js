

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var overWritten = false;
  var bucket = this._storage.get(index) || [];
  _.forEach(bucket, function(tuple) {
    if (tuple[0] === k) {
      tuple[1] = v;
      overWritten = true;
    }
  });
  if (!overWritten || bucket.length === 0) {
    bucket.push([k, v]);
  }
  this._storage.set(index, bucket);
  this._size++;
  this.checkSize();
  this._storage.each(function(item) {
    var arr = [];
    arr.push(item);
    console.log(arr);
  });
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var value;
  _.forEach(bucket, function(tuple) {
    if (tuple[0] === k) {
      value = tuple[1];
    }
  });
  return value;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  _.forEach(bucket, function(tuple, idx) {
    if (tuple[0] === k) {
      bucket.splice(idx, 1);
    }
  });
  this._storage.set(index, bucket);
  this._size--;
  this.checkSize();
};

HashTable.prototype.checkSize = function() {
  var intRatio = this._size / this._limit;
  if (intRatio >= 0.75 ) {
    this.doubleSize();
  }
  if (intRatio <= 0.25) {
    this.halveSize();
  }
}; 

HashTable.prototype.doubleSize = function() {
  var oldStorage = [];
  this._storage.each(function(item) {
    if (item) {
      oldStorage.push(item);  
    }
  });
  this._limit *= 2;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < oldStorage.length; i++) {
    for (var j = 0; j < oldStorage[i].length; j++) {
      this.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
    }
  }
};


HashTable.prototype.halveSize = function() {
  // var oldStorage = [];
  // this._storage.each(function(item) {
  //   oldStorage.push(item);
  // });
  // this._limit *= 2;
  // this._storage = LimitedArray(this._limit);
  // for (var i = 0; i < oldStorage.length; i++) {
  //   for (var j = 0; j < oldStorage[i].length; i++) {
  //     this.insert(oldStorage[i][j][0], oldStorage[i][j][1]);
  //   }
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: Time complexity is O(1)
 retrieve: Time complexity O(1)
 remove: Time complexity is O(1)
 */


