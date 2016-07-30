describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add strings to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove strings from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should add numbers to a set', function() {
    set.add(3);
    set.add(4);
    expect(set.contains(3)).to.equal(true);
    expect(set.contains(4)).to.equal(true);
  });

  it('should remove numbers from a set', function() {
    set.add(3);
    set.remove(3);
    expect(set.contains(3)).to.equal(false);
  });

  it('should add objects to a set', function() {
    set.add({a: 1, b: 2});
    set.add({dog: 'happy', cat: 'feisty'});
    expect(set.contains({a: 1, b: 2})).to.equal(true);
    expect(set.contains({dog: 'happy', cat: 'feisty'})).to.equal(true);
  });

  it('should remove objects from a set', function() {
    set.add({a: 1, b: 2});
    set.remove({a: 1, b: 2});
    expect(set.contains({a: 1, b: 2})).to.equal(false);
  });

});
