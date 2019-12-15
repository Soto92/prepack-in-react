
(function() {
  function makeCar(color) {
    return {
      getColor() { return color; },
    }
  };
  global.cars = ['red', 'green', 'blue', 'yellow', 'pink'].map(makeCar);
})();