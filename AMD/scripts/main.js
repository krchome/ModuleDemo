// Configure RequireJS
require.config({
  baseUrl: 'scripts',
  paths: {
    // Define paths for your modules
    math: 'modules/math',
    calculator: 'modules/calculator'
  }
});

// Load the initial module
require(['calculator'], function(calculator) {
  var sum = calculator.calculateSum(4, 7);
  var difference = calculator.calculateDifference(10, 3);

  console.log('Sum: ' + sum); // Sum: 11
  console.log('Difference: ' + difference); // Difference: 7
});
