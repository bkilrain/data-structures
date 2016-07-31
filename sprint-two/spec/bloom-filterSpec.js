describe('Bloom Filter', function() {
  var bloomfilter;

  beforeEach(function() {
    bloomfilter = new BloomFilter();
  });

  it('should have methods named "addToSet", "contains", and "hashThreeTimes', function() {
    expect(bloomfilter.addToSet).to.be.a('function');
    expect(bloomfilter.contains).to.be.a('function');
    expect(bloomfilter.hashThreeTimes).to.be.a('function');
  });

  it('should contain a limited array of all false values before adding a value to the set'), function() {
    bloomfilter.
  }

});
