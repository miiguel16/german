const esperar = (milisegundos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (milisegundos < 3000) {
                resolve(`recalculando ${milisegundos / 1000} segundos carga exitosa`);
            } else {
                reject(new Error("el sistema tardo demaciado se a caido"))
            }

        }, milisegundos);
    });
};
esperar(2000).then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error(error);
});