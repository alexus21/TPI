// Solicitar al usuario que ingrese 3 numeros. Cree una funciön que
// determine el mayor, el menor y el numero del centro.

const prompt = require("prompt-sync")();

function GetNumbers(dataNumArray){

    this.sortItems = function (){
        const sortedArray = dataNumArray.sort((a, b) => a - b);
        const bigger = sortedArray[2];
        const smaller = sortedArray[0];
        const medium = sortedArray[1];
        console.log(dataNumArray);
        console.log(sortedArray);
        return `Bigger: ${bigger}\nSmaller: ${smaller}\nMedium: ${medium}`;
    }
}

let dataNumArray = [];

let firstNumber = prompt("Enter the first number: ");
let secondNumber = prompt("Enter the second number: ");
let thirdNumber = prompt("Enter the third number: ");

dataNumArray.push(firstNumber, secondNumber, thirdNumber);

const bigger = new GetNumbers(dataNumArray);
console.log(bigger.sortItems());
