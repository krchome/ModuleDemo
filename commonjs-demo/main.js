// main.js

/* const stringUtils = require('./stringUtils');
const arrayUtils = require('./arrayUtils');

const upper = stringUtils.toUpperCase('hello world');
const lower = stringUtils.toLowerCase('HELLO WORLD');
const first = arrayUtils.firstElement([1, 2, 3, 4]);
const last = arrayUtils.lastElement([1, 2, 3, 4]);

console.log('Uppercase: ' + upper); // Uppercase: HELLO WORLD
console.log('Lowercase: ' + lower); // Lowercase: hello world
console.log('First Element: ' + first); // First Element: 1
console.log('Last Element: ' + last); // Last Element: 4
 */
// main.js

const textProcessor = require('./textProcessor');

const text = 'Hello world from CommonJS';

const result = textProcessor.processText(text);

console.log('Uppercase: ' + result.upper); // Uppercase: HELLO WORLD FROM COMMONJS
console.log('Lowercase: ' + result.lower); // Lowercase: hello world from commonjs
console.log('First Word: ' + result.firstWord); // First Word: Hello
console.log('Last Word: ' + result.lastWord); // Last Word: CommonJS
