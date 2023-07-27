// Preguntar a un usuario si desea crear un objeto Perro, en caso de
// desear crearlo, debe colocar un nombre, raza. color, juguete
// favorito, si es manso y descripciön de la mascota, Debe contener al
// menos 3 métodos para interactuar con él. Cree el Objeto tanto con
// notaciön literal como con Objeto Constructor.

const p = require("prompt-sync")();

const NewDog = {
    dogName: '',
    dogBrand: '',
    dogColour: '',
    dogsFavouriteToy: '',
    isDogTame: '',
    dogDescription: '',

    comer: function (){
        return this.dogName + " está comiendo";
    },

    dormir: function (){
        return this.dogName + " está dormido";
    },

    jugar: function (){
        return this.dogName + " está jugando con su " + this.dogsFavouriteToy;
    },
}

function Dog(arrDataDog){
    this.dogName = arrDataDog[0];
    this.dogBrand = arrDataDog[1];
    this.dogColour = arrDataDog[2];
    this.dogsFavouriteToy = arrDataDog[3];
    this.isDogTame = arrDataDog[4];
    this.dogDescription = arrDataDog[5];

    this.correr = function (){
        return this.dogName + " está corriendo";
    }

    this.saltar = function (){
        return this.dogName + " está saltando";
    }

    this.ladrar = function (){
        return this.dogName + " está ladrando";
    }
}

let userAnswer = p("Deseas un perro? [S/N]: ");

if(userAnswer === "S" || userAnswer === "s"){
    let dataDog = [];

    let name = p("Nombre: ");
    let brand = p("Raza: ");
    let colour = p("Color: ");
    let favouriteToy = p("Juguete favorito: ");
    let isTame = p("El perro es manso?: ");
    let description = p("Descripción: ");

    //Usando objeto literal:
    NewDog.dogName = name;
    NewDog.dogBrand = brand;
    NewDog.dogColour = colour;
    NewDog.dogsFavouriteToy = favouriteToy;
    NewDog.isDogTame = isTame;
    NewDog.dogDescription = description;

    console.log("Nombre: " + NewDog.dogName);
    console.log("Raza: "+ NewDog.dogBrand);
    console.log(NewDog.dormir());

    //Usando objeto constructor
    dataDog.push(name, brand, colour, favouriteToy, isTame, description);

    const dog = new Dog(dataDog);
    console.log("Juguete favorito: " + dog.dogsFavouriteToy);
    console.log(dog.correr());
}
