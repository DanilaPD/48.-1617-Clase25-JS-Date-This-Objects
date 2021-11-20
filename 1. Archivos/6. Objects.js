//* https://wwww.w3schools.com/js/js_this.asp
//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this
//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//* https://wwww.youtube.com/watch?v=gvicrj31JOM (Tutorial de Mosh)
//* https://somospnt.com/blog/207-funciones-flecha-vs-funciones-regulares

const gato = {
  raza: "común europeo",
  nombre: "Golosina",
  color: "Naranja a rayas",
  edad: 12,
  patas: 3,
  castrado: true,

  // Nuestro primer "THIS":

  //* Con functions:
  descripcion: function () {
    console.log(`Este gato se llama ${nombre}.`);
    // Al consolearlo, nos dice que el nombre no está definido. Para que funcione, vamos a tener que usar el THIS.
  },

  descripcion2: function () {
    console.log(`Este gato se llama ${this.nombre}.`);
    // THIS en este caso se refiere al objeto en el que estamos en el contexto de ejecución.
  },

  //* Con flechas:
  caracteristicas: () => console.log(`Este gato tiene ${this.edad}`),
  // La flecha no encontró el CONTEXTO y va a dar undefined.

  caracteristicas2: () => console.log(`Este gato tiene ${edad}`),
  // En este caso, va a suceder lo mismo: la flecha no va a encontrar el CONTEXTO y va a dar error.

  //! La única forma en que podríamos usar la FLECHA sería dentro de una FUNCIÓN normal:
  edades: function () {
    // La FLECHA anda solo estando adentro de una FUNCIÓN TRADICIONAL y requiere el THIS y ser ejecutada.
    const edadDelGato = () => {
      console.log(this.edad);
    };
    edadDelGato();
  },
};

// Function 1:
//* gato.descripcion();
// Da error.

// Function 2:
gato.descripcion2();
// Funciona.

//*

// Flecha 1:
//* gato.caracteristicas();
// Da undefined.

// Flecha 2:
//* gato.caracteristicas2();
// Da error.

//! En estos casos, solo podemos con el FUNCTION(){} y con el THIS.

// Flecha 3:
//! La única forma de usar la FLECHA es esta y, en general, no se justifica. Es una alternativa muy engorrosa. Solo la tendremos que usar en casos muy puntuales.
gato.edades();
// La única que va a funcionar.
