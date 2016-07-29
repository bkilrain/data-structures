

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
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
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: Time complexity is O(1)
 retrieve: Time complexity O(1)
 remove: Time complexity is O(1)
 */


