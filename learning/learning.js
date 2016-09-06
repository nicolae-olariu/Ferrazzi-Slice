(function () {
  function test(number) {
   return Array.prototype.map.call(number, function(x) {
      return x;
    }).reverse().join('');
  }

  console.log(test('5454563453453'));
})();

