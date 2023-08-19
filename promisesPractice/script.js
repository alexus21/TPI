const url = "http://localhost:3000/estudiantes";

function studentsData() {
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            if(true)
                resolve("Resuelto exitosamente");
            reject(new Error("Error al procesar datos"));
        }, 1000);
    });
}

studentsData().then(function (data){
    console.log("Datos obtenidos: ", data);
    return fetch(url);
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error al procesar: ", error));
