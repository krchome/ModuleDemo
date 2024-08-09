// holidayUtils.js
export function isHoliday(date) {
    const holidays = ['2024-01-01', '2024-12-25']; // New Year's Day and Christmas
    const formattedDate = date.toISOString().split('T')[0];
    return holidays.includes(formattedDate);
  }
  