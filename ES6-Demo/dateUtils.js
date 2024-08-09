// dateUtils.js
export function formatDate(date) {
    return date.toISOString().split('T')[0];
  }
  
  export function getYear(date) {
    return date.getFullYear();
  }
  
  export default function getCurrentDate() {
    return new Date();
  }
  
  