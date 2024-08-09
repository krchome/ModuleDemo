define(['math'], function(math) {
    return {
      calculateSum: function(a, b) {
        return math.add(a, b);
      },
      calculateDifference: function(a, b) {
        return math.subtract(a, b);
      }
    };
  });
  