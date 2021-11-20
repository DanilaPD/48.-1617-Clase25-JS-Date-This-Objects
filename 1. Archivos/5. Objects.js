//* https://www.w3schools.com/js/js_objects.asp

// Un objeto es una representación de algo real:
const gato = {
  raza: "común europeo",
  nombre: "Golosina",
  color: "Naranja a rayas",
  edad: 12,
  patas: 3,
  castrado: true,
};

// Accedemos a los datos de dos formas:
console.log(gato.raza);
console.log(gato["edad"]);

//* No podríamos entrar por ÍNDICE NUMÉRICO:
console.log(gato[2]); // Devuelve "undefined".
