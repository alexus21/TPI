const jsonDataFile = "http://localhost:3000/estudiantes";

let p = new Promise(function (resolve, reject) {
    setTimeout(function () {
        if (true)
            resolve("Resuelto exitosamente");
        else
            reject(new Error("Error al procesar"));
    }, 1000);
});

console.log(p);

p.then(function (message) { // Cambio studentsData a message
    console.log(message); // Cambio studentsData a message
    return fetch(jsonDataFile);
})
    .then(response => response.json())
    .then(studentsData => console.log("Datos de los estudiantes: ", studentsData))
    .catch(error => console.log("Error: ", error.message)); // El catch evita que acceda al siguiente then
