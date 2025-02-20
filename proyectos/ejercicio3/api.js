
const promesa1 = () =>{
    return fetch("https://wttr.in/Medell%C3%ADn?format=j1")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error en la solicitud");
    }
        return response.json();
    })
    .then((data) => {
        
        return data.current_condition[0].lang_es[0].value;
    })
    .catch((error) => {
        console.error("Hubo un problema con la solicitud: ", error);
    });
}

const promesa2 = () => {
    return fetch("https://api.open-meteo.com/v1/forecast?latitude=6.25184&longitude=-75.56359&current_weather=true")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error en la solicitud");
        }
        return response.json();
    })
    .then((data) => {
        const currentWeather = data.current_weather;
        const weatherCode = currentWeather.weathercode; // Obtén el código de clima

        // Traducir el weathercode a una descripción sencilla
        let weatherDescription = '';

        switch (weatherCode) {
            case 0:
                weatherDescription = 'Despejado';
                break;
            case 1:
            case 2:
            case 3:
                weatherDescription = 'Parcialmente nublado';
                break;
            case 45:
            case 48:
                weatherDescription = 'Niebla';
                break;
            case 51:
            case 53:
            case 55:
                weatherDescription = 'Lluvia ligera';
                break;
            case 56:
            case 57:
                weatherDescription = 'Lluvia congelada';
                break;
            case 61:
            case 63:
            case 65:
                weatherDescription = 'Lluvia moderada';
                break;
            case 66:
            case 67:
                weatherDescription = 'Lluvia congelada fuerte';
                break;
            case 71:
            case 73:
            case 75:
                weatherDescription = 'Nieve ligera';
                break;
            case 77:
                weatherDescription = 'Granos de nieve';
                break;
            case 80:
            case 81:
            case 82:
                weatherDescription = 'Lluvia intensa';
                break;
            case 85:
            case 86:
                weatherDescription = 'Nieve intensa';
                break;
            case 95:
            case 96:
            case 99:
                weatherDescription = 'Tormenta con truenos';
                break;
            default:
                weatherDescription = 'Condición desconocida';
                break;
        }
        return weatherDescription;
    })
    .catch((error) => {
        console.error("Hubo un problema con la solicitud: ", error);
    });
}

const promesa3 = () =>{
    return fetch("https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=6.25184&lon=-75.56359")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Error en la solicitud");
    }
        return response.json();
    })
    .then((data) => {
        return data;
    })
    .catch((error) => {
        console.error("Hubo un problema con la solicitud: ", error);
    });
}

Promise.race([promesa1(),promesa2(),promesa3()]).then((resultado) => {
    console.log( "la respuesta mas rapida del clima de medellin es ", resultado); 
    })
    .catch((error) => {
    console.error(error);
})
