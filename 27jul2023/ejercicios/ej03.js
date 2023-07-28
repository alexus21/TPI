// Crear al menos 4 perros tal como explica en el punto 2 y
// guardarlos en un arreglo. Luego genera un arreglo nuevo filtrando
// de manera automatica la lista y mostrar un nuevo arreglo nada mås
// con los perros que son mansos.

const p = require("prompt-sync")();

function Dog(name, brand, colour, favouriteToy, isTame, description){
    this.dogName = name;
    this.dogBrand = brand;
    this.dogColour = colour;
    this.dogsFavouriteToy = favouriteToy;
    this.isDogTame = isTame;
    this.dogDescription = description;

    this.correr = function (){
        return this.dogName + " está corriendo";
    }

    this.jugar = function (){
        return this.dogName + " está saltando";
    }

    this.ladrar = function (){
        return this.dogName + " está ladrando";
    }
}

let dogList = [];

for(let i = 0; i < 4; i++){
    console.log("\nPerro #" + (i+1));
    let name = p("Nombre: ");
    let brand = p("Raza: ");
    let colour = p("Color: ");
    let favouriteToy = p("Juguete favorito: ");
    let isTameInput = p("El perro es manso? [S/N]: ");
    let description = p("Descripción: ");

    // Convertir la respuesta en un valor booleano
    let isTame = isTameInput.toLowerCase() === "s";

    // Agregar el perro creado al arreglo dogList
    dogList.push(new Dog(name, brand, colour, favouriteToy, isTame, description));
}

const tameDogs = dogList.filter(dog => dog.isDogTame === true);
const tameDogsList = tameDogs.map(dog => dog.dogName);

console.log("Perros mansos:" + tameDogsList);
