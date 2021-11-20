//* Ejercicio de la clase pasada:

//Imprimir toda la tabla del 5:

for (let i = 0; i <= 10; i++) {
  // Va a ser igual a 5 una sola vez, a la siguiente vuelta va a ser 6.
  for (let j = 5; j <= 5; j++) {
    console.log(`${j} x ${i} = ${j * i}.`);
  }
}

//* Ejercicio nuevo de repaso:

// Hace lo de adentro hasta que la condición sea FALSE, ahí va a la de afuera. Si la de afuera es TRUE, entra a la de adentro de vuelta, QUE DE NUEVO ES 0, hasta que sea FALSE de vuelta y repite el LOOP.
// Ahí hará de vuelta el mismo recorrido, por lo que saldrá una vez más a la de afuera:
for (let i = 0; i <= 3; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`j es ${j}, i es ${i}.`);
  }
}
