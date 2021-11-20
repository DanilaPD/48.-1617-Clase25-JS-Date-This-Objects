//* Constructor de días de la semana:

const weekday = new Array(7);
console.log(weekday);
// Hasta acá todavía me va a decir que hay 7 elementos vacíos.

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
// weekday[7] = "CristopherDay";

console.log(weekday);
// Acá ya van a figurar todos los días de la semana en forma de "array".

// Con esto, sabe qué día es hoy:
const day = new Date();

// Nos toma la posición del "array" que corresponda al día que sea hoy:
// En este caso, por lo tanto, nos devuelve lo que esté en esa posición:
let d = weekday[day.getDay()];
console.log(d);

// En este caso, nos devuelve la posición:
let daySinWeek = day.getDay();
console.log(daySinWeek);
