const promesaRapida = new
    Promise((resolve) => {
        setTimeout(() => resolve("Promesa rápida resuelta en 1 segundo"), 1000);
    });
const promesaMedia = new
    Promise((resolve) => {
        setTimeout(() => resolve("Promesa lenta resuelta en 3 segundos"), 3000);
    });
const promesaLenta = new
    Promise((resolve) => {
        setTimeout(() => resolve("Promesa muy lenta resuelta en 5 segundos"), 5000);
    });


Promise.race([promesaRapida,
    promesaMedia, promesaLenta])
    .then((resultado) => {
        console.log(resultado); // "Promesa rápida resuelta en 1 segundo"
    })
    .catch((error) => {
        console.error(error);
    });