function llamarGemini(prompt) {
  const API_KEY = 'AIzaSyC5S4537hH36jbx8DMjOx9Ong2zyeZx4J4';
  const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [{
        parts: [
          { text: prompt }
        ]
      }]
    })
  })
  .then(respuesta => {
    if (!respuesta.ok) {
      throw new Error(`Error HTTP: ${respuesta.status}`);
    }
    return respuesta.json();
  })
  .then(datos => {
    const textoGenerado = datos.candidates[0].content.parts[0].text;
    
    // console.log(textoGenerado);
    return textoGenerado;
  })
  .catch(error => {
    console.error('Error al llamar a la API de Gemini:', error);
  });
}
  

async function realizarResumen(){

  const resumenes = [
    llamarGemini(`Resume lo siguiente: Historia y tecnología "La invención de la imprenta en el siglo XV revolucionó la forma en que se distribuía la información, permitiendo la producción masiva de libros y facilitando el acceso al conocimiento. Este avance tecnológico fue clave para el Renacimiento y sentó las bases de la era moderna de la comunicación."`),
    
    llamarGemini(`Resume lo siguiente: Cambio climático "El cambio climático es una de las mayores amenazas para la humanidad. El aumento de la temperatura global, el derretimiento de los polos y la intensificación de los fenómenos meteorológicos extremos son algunas de sus consecuencias. Es fundamental reducir las emisiones de gases de efecto invernadero y promover el uso de energías renovables."`),
    
    llamarGemini(`Resume lo siguiente: Exploración espacial "Desde la llegada del hombre a la Luna en 1969, la exploración espacial ha avanzado significativamente. Actualmente, se están desarrollando misiones para colonizar Marte y buscar vida en otros planetas. La exploración del espacio no solo amplía nuestro conocimiento, sino que también impulsa el desarrollo de nuevas tecnologías aplicables en la Tierra."`),
    
    llamarGemini(`Resume lo siguiente: Inteligencia artificial "La inteligencia artificial ha transformado industrias enteras mediante el aprendizaje automático y la automatización. Desde asistentes virtuales hasta diagnóstico médico, la IA promete revolucionar la sociedad, aunque también plantea desafíos éticos y de empleo."`),
    
    llamarGemini(`Resume lo siguiente: Energías renovables "La transición hacia fuentes de energía renovable, como la solar y la eólica, es clave para combatir el cambio climático. Aunque los costos de instalación siguen siendo una barrera, los avances tecnológicos han permitido que sean más accesibles y eficientes."`)
  ];

  const resultados = await Promise.all(resumenes)
  console.log("Resumenes generados:");
  console.log(resultados);
  

}

realizarResumen()


