var BloomFilter = function() {
  this.m = 18;
  this._bitArray = LimitedArray(this.m);
};

BloomFilter.prototype.addToSet = function(string) {
  var indices = this.hashThreeTimes(string);
  indices.forEach(function(idx) {
    this._bitArray.set(idx, true);
  }.bind(this));
  console.log(this._bitArray);
};

BloomFilter.prototype.contains = function(string) {
  var indices = this.hashThreeTimes(string);
  for (var i = 0; i < indices.length; i++) {
    if (this._bitArray.get(indices[i]) === true) {
      return true;
    }
  }
  return false;
};

BloomFilter.prototype.hashThreeTimes = function(string) {
  var results = [];
  results.push(getIndexBelowMaxForKey(string, this.m));
  results.push(murmurhash(string));
  results.push(hashFnv32a(string, false, 1) % this.m);
  return results;
};
