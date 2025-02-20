//EJEMPLO DEL ENVOLVIMIENTO DE UNA PROMESA MEDIANTE EL USO DE async
async function obtenerMensaje() {
    return "Hola desde una función asíncrona";
}

obtenerMensaje().then((mensaje) => {
    console.log(mensaje); // "Hola desde una función asíncrona"
}) .catch ((err) => {
    console.log(err)
})

//ACA USAMOS EL DE ASYNC - AWAIT PARA CONVERTIR UN PROCESO ASINCRONO EN SINCRONO

function simularTarea() {
    return new Promise((resolve, reject) => {
        function pendiente() {
            resolve(500);
        }
        setTimeout(pendiente, 4000)
    })
}

// volver sincrona 



async function tareaAsincrona() {
    console.log("Iniciando tarea...");
    const valor = await simularTarea();
    console.log("Tarea completada después de 4 segundos con valor: ", valor);
}
//En esta el "await" funciona como para volver una funcion sincrona pero, es con la condicion de que la funcion sea asincrona (asyn)

tareaAsincrona();