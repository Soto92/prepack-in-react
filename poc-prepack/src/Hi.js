(function () {
  
  function hello() {
    return 'hello';
  }
  function world() {
    return 'world';
  }
  global.result = hello() + ' ' + world();

})()