

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
  this.halveMe = false;
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
    this.halveMe = false;
    this.resizer('double');
  }
  if (intRatio <= 0.25 && this.halveMe && this._limit > 8) { // <--- minimum hash table size is 8!!
    this.halveMe = false;
    this.resizer('halve');
  }
  if (intRatio > 0.25) {
    this.halveMe = true;
  }
}; 

HashTable.prototype.resizer = function(method) {
  var oldStorage = [];
  this._storage.each(function(item) {
    if (item && item.length > 0) {
      oldStorage.push(item);  
    }
  });
  if (method === 'double') {
    this._limit *= 2;
  } else {
    this._limit /= 2;
  }
  this._size = 0;
  this._storage = LimitedArray(this._limit);
  for (var i = 0; i < oldStorage.length; i++) {
    var bucket = oldStorage[i];
    for (var j = 0; j < bucket.length; j++) {
      this.insert(bucket[j][0], bucket[j][1]);
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: Time complexity is O(1)
 retrieve: Time complexity O(1)
 remove: Time complexity is O(1)
 checkSize: O(1)
 resize: O(n)
 */


