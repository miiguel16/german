
// Uso de await con una Promesa
// Crea una función asíncrona que utilice await para esperar una
//  promesa que resuelve en 3 segundos y luego imprime "Proceso terminado".
// Función delay para simular el retraso de 1 segundo
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Función que procesa los nombres
async function procesarNombres(nombres) {
  for (const nombre of nombres) {
    await delay(1000);  // Espera 1 segundo
    console.log(`Procesado: ${nombre}`);
  }
}

// Arreglo de nombres para procesar
const nombres = ['Ana', 'Luis', 'Carlos', 'María', 'Pedro'];

// Llamar a la función para procesar los nombres
procesarNombres(nombres);
