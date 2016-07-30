var dataGenerator = function(boundary) {
  var data = [];
  for (var i = 0; i < boundary; i++) {
    data.push(Math.floor(Math.random() * 100));
  }
  return data;
};