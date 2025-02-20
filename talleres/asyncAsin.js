//EJEMPLO DEL ENVOLVIMIENTO SOBRE UNA PROMESA MEDIANTE EL async
async function obtenerMensaje() {
    return "Hola desde una función asíncrona"

}
obtenerMensaje().then((mensaje) => {
    console.log(mensaje); // "Hola desde una función asíncrona"
}).catch((err) => {
    console.error(err);
})

//USO DE ASYNC - AWAIT PARA CONVERTIR UN PROCESO ASINCRONO EN SINCRONO
function simularTarea() {
    return new Promise((resolve, reject) => {
        function pendiente() {
            resolve(500);
        }
        setTimeout(pendiente, 4000)
    })
}

async function tareaAsincrona() {
    console.log("Iniciando tarea...");
    const valor = await simularTarea();
    console.log("Tarea completada después de 4 segundos con valor: ", valor);
}
tareaAsincrona();