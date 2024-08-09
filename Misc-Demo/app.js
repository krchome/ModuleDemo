//Importing the math.js module
import{PI, calculateCircumference, calculateArea} from './math.js';
console.log(`PI value is:${PI}`);
const radius = 5;
const circumference = calculateCircumference(radius);
const area = calculateArea(radius);
console.log(`The circumference of the circle with radius ${radius} is ${circumference}`);
console.log(`The area of the circle with radius ${radius} is ${area}`);