// Encadenamiento de Promesas
// Simular un flujo de pasos donde cada paso tarda 1 segundo en completarse.
//  Usar tres promesas y encadenarlas con .then() para que se ejecuten en orden.

const sumar = (a, b) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);

  });
};

sumar(3, 5)
  .then((resultado) => {
    console.log(`El resultado es: ${resultado}`);
    // El resultado es: 8
    return sumar(resultado, 10);
  })

  .then((nuevoresultado) => {
    console.log(`El nuevo resultado es: ${nuevoresultado}`);
    return sumar(nuevoresultado, 2)
  })

  .then((nuevoNuevoResultado) => {
    console.log(`El nuevo resultado es: ${nuevoNuevoResultado}`);
    // El nuevo resultado es: 18
  })
  .catch((error) => {
    console.error(error);
  });


