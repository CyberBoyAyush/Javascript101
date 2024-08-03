// Date and Time in JavaScript

let date = new Date();
console.log(date);

// Methods of Date object
console.log(date.getDate());
console.log(date.getMonth()); // 0 based index
console.log(date.getFullYear());
console.log(date.getDate()); 

// Setting Custom Date
// Year, Month, Date, Hours, Minutes, Seconds 
let customDate = new Date(2024, 1, 24, 12, 25, 30);
console.log(customDate.toLocaleString());

// Setting Custom Date using string
let customDateStr = new Date("2024-02-24T12:25:30");
console.log(customDateStr.toLocaleString());

// To.localeString() function
date.toLocaleString('default', { month: 'long' });
date.toLocaleString('default', { weekday: 'long' });
date.toLocaleString('default', { year: 'numeric' });
date.toLocaleString('default', { hour: 'numeric' });
date.toLocaleString('default', { minute: 'numeric' });
date.toLocaleString('default', { second: 'numeric' });
console.log(date.toLocaleString());