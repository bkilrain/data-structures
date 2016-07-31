var BloomFilter = function() {
  this.m = 18;
  this._bitArray = LimitedArray(this.m);
};

BloomFilter.prototype.addToSet = function(string) {
  var indices = this.hashThreeTimes(string);
  indices.forEach(function(val) {
    this._bitArray.set(true);
  }.bind(this))
};

BloomFilter.prototype.contains = function(string) {

};

BloomFilter.prototype.hashThreeTimes = function(string) {
  var results = [];
  results.push(getIndexBelowMaxForKey(string, this.m));
  results.push(murmurhash(string));
  results.push(hashFnv32a(string, false, 1) % this.m);
  return results;
}
