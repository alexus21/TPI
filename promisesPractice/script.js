const url = "http://localhost:3000/estudiantes";

function studentsData() {
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            if(true)
                resolve(fetch(url));
            reject(new Error("Error al procesar datos"));
        }, 1000);
    });
}

studentsData()
    .then(response => response.json())
    .then(data => console.log("Datos obtenidos: ", data))
    .catch(error => console.error("Error: ", error));
