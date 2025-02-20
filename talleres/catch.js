// Manejo de Errores en Promesas Crear una promesa que se rechace si un número es menor a
// 0.5. Manejar el error con .catch() e imprimir el mensaje "Promesa rechazada" en ese caso.

const numero = new Promise((resolve, reject) => {
  const numero = 1;
  if (numero > 0.5) {
    resolve("¡Operación completada con éxito!");
  } else {
    reject(new Error("hubo un error"));
  }
});
// Usando la promesa

numero
  .then((mensaje) => {
    console.log(mensaje); //
    ("¡Operación completada con éxito!");
  })
  .catch((error) => {
    console.error(error); // "Hubo un error en la operación."
  });
