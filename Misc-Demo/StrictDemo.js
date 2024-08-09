function foo(a, a, b) { // No error
    console.log(a, a, b);
}
foo(1, 2, 3); // Outputs: 2 2 3
