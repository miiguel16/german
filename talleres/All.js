
const promesa1 = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve("promesa de un segundo"), 1000
    )
})

const promesa2 = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve("promesa de dos segundos"), 2000
    )
})

const promesa3 = new Promise((resolve, reject) => {
    setTimeout(() =>
        resolve("promesa de tres segundos"), 3000)
})



Promise.all([promesa1, promesa2, promesa3]).then((resultados) => {
    console.log(resultados);
}).catch((error) => {
    console.error(error);
});


