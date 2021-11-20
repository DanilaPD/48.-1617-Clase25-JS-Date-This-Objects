//* https://stackoverflow.com/questions/6268679/best-way-to-get-the-key-of-a-key-value-javascript-object/50941117/

// Para acceder a la "key" y mostrarla con una "function", hay que usar el THIS:

const clima = {
  temperatura: 16,
  nubosidad: "baja",
  precipitaciones: false,
  climate: function () {
    console.log(
      `Hoy hace ${this.temperatura}°, la ${Object.keys(this)[1]} es ${
        this.nubosidad
      } y el riesgo de ${Object.keys(this)[2]} es ${
        this.precipitaciones === false ? "nulo" : "alto"
      }.`
    );
  },
};

clima.climate();
