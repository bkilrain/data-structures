

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = {};
  if (this._storage[index] !== undefined) {
    bucket = this._storage.get(index);
  } 
  bucket[k] = v;
  this._storage.set(index, bucket);
  
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  delete bucket[k];
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: Time complexity is O(1)
 retrieve: Time complexity O(1)
 remove: Time complexity is O(1)
 */


