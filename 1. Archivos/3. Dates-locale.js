//* Stack overflow:
//* https://stackoverflow.com/questions/2388115/get-locale-short-date-format-using-javascript

const d = new Date();

// Esto nos va a devolver: 2021-11-18T21:57:45.130Z
console.log("Tal como sale sin parámetros: ", d);

// Mes-Día-Año:
// Esto nos va a devolver la hora local: 18/11/2021 19:03:32
const toLocale = (date) => console.log("To Locale: ", date.toLocaleString());

// Hay que llamar a la función:
toLocale(d);

//*

// Con estos parámetros, va a armar la fecha y nos va a pasar un formato determinado:
let options = {
  weekday: "long",
  year: "numeric",
  month: "2-digit",
  day: "numeric",
  //* Podemos pasar cuantos parámetros necesitemos:
  //   hour: "numeric",
  //   minute: "numeric",
  //   second: "numeric"
};

const toLocaleConParams = (date) => {
  console.log("To Locale con Parámetros: ", date.toLocaleString("es", options));
};
// "es" es el idioma, mientras que "options" son los parámetros para la conversión que va a hacer.

// Esto nos va a devolver: jueves, 18/11/2021
toLocaleConParams(d);
