(function() {
  var privateVar = "I'm private";
  console.log(privateVar); // Outputs: I'm private
})();

console.log(privateVar); // Uncaught ReferenceError: privateVar is not defined

