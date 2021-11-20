//* https://www.educative.io/edpresso/how-to-add-property-to-an-object-in-javascript

// Vamos a crear un objeto con NEW:

let clima = new Object({
  temperatura: 16,
  nubosidad: "baja",
  precipitaciones: false,
});

console.log(clima);
console.log(typeof clima);
console.log(typeof clima, clima);

//* En los OBJETOS, NO podemos usar "push". "Push" es para los "arrays".

//* Varias formas de agregar elementos:

// La forma larga es con una "function":
const addMaxTemp = () => {
  clima.maxima = 18;
  console.log(clima);
};

addMaxTemp();

// Una forma más corta es con []:
clima["minima"] = 12;
console.log(clima);

// La otra forma corta sin "function", sería esta con un punto:
clima.humedad = "96%";
console.log(clima);
