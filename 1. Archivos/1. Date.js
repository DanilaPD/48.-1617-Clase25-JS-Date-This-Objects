//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date
//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/constructor
//* https://wwww.w3schools.com/jsref/jsref_obj_date.asp

//Con NEW:
const newDate = new Date();
console.log("New Date: ", newDate);

//Fecha en formato UNIX:
//* https://www.epochconverter.com/
const now = Date.now();
console.log("Con Now: ", now);

// Nos lo va a devolver en milisegundos (Podemos comprobarlo en el "Epoch Converter").
console.log("Con Parse: ", Date.parse("Dec 25, 1995"));

// Nos va devolver un "NaN" porque no le pasamos ningún parámetro.
console.log("Con UTC: ", Date.UTC());

//*

// Sin milisegundos:
console.log("Con UTC: ", Date.UTC(2011, 0, 16, 15, 12, 10));

//Con milisegundos:
console.log("Con UTC: ", Date.UTC(2011, 0, 16, 15, 12, 10, 130));

//*

//! El AÑO y el MES son obligatorios. Todos los demás son opcionales:

// Puede ser una fecha que ya pasó:
console.log("Con UTC: ", Date.UTC(2001, 0, 16, 15, 12, 10, 130));

// También puede ser una fecha que todavía no pasó:
console.log("Con UTC: ", Date.UTC(2041, 0, 16, 15, 12, 10, 130));

// Si no ponemos adelante los primeros 2 números, asume que el año es entre 1990 y 1999:
console.log("Con UTC: ", Date.UTC(41, 0, 16, 15, 12, 10, 130));

// Si es menor a 1970, da un número negativo:
console.log("Con UTC: ", Date.UTC(69, 11, 16, 15, 12, 10, 130));

//* Conseguir la fecha en EPOCH:

// Número más chico:
console.log("Fecha en EPOCH:", Math.floor(new Date().getTime()) / 1000.0);

// Si no lo dividimos, nos va a dar un número muy grande:
console.log("Fecha en EPOCH", Math.floor(new Date().getTime()));
