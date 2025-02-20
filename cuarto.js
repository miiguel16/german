fetch("https://jsonplaceholder.typicode.com/posts/1")

    .then((response) => {
        if (!response.ok) {
            throw new Error("Error en la solicitud");
        }
        return response.json();
    })

    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Hubo un problema con la solicitud:", error);
    });