const fs = require('fs').promises;
const path = require('path');

async function generarArchivos(cantidad) {
    const tareas = [];

    for (let i = 1; i <= cantidad; i++) {
        const nombreArchivo = path.join(__dirname, `archivo_${i}.txt`);
        const contenido = `Este es el contenido del archivo número ${i}`;

        // Vamos a rear una promesa de escritura y la almacenamos en un array
        const tarea = fs.writeFile(nombreArchivo, contenido, 'utf8');
        tareas.push(tarea);
    }

    // Esperamos a que todas las promesas se completen en paralelo
    await Promise.all(tareas);

    console.log(`${cantidad} archivos creados exitosamente.`);
}

// Generar 100 archivos
generarArchivos(50).catch(console.error);
