import getCurrentDate, { formatDate, getYear } from './dateUtils.js';
//import { add } from './mathUtils.js';
import capitalize from './stringUtils.js';

const today = getCurrentDate();
const formattedDate = formatDate(today);
const currentYear = getYear(today);
const title = capitalize('javascript modules are powerful!');

console.log('Today:', today);
console.log('Formatted Date:', formattedDate); // Output: Formatted Date: YYYY-MM-DD
console.log('Current Year:', currentYear); // Output: Current Year: YYYY
console.log('Title:', title); // Output: JavaScript Modules Are Powerful!

//Example: Dynamic Import
if (new Date().getDay() === 0) { // Check if today is Sunday
    import('./holidayUtils.js').then(module => {
      const isHoliday = module.isHoliday(new Date());
      console.log('Is today a holiday?', isHoliday);
    }).catch(error => {
      console.error('Failed to load module:', error);
    });
  }
  