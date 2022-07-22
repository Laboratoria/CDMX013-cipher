//Despliega la segunda vista de la interfaz y oculta la primera
import { pressButton, displayView } from './newView.js';
pressButton.addEventListener("click", displayView);


import cipher from './cipher.js';

//Llamado de variables desde el DOM
const inputButton = document.getElementById("cipherButton");
const outputButton = document.getElementById("decipherButton");


//Esta función trae la info que el UX ingresa a la interfaz y determina que hacer en caso de no obtener lo esperado en encode
function encode() {
    let offset = (document.getElementById("numberSelect").value);
    let inputText = document.getElementById("cipherBox").value;
    let printAnswer = document.getElementById("decipherBox");
    let string = inputText.toUpperCase();
    
     /*if (offset !== Number || offset < 0) {
        alert("Por favor ingresa un número")
    } else  if (string == "" ) {
        alert("Por favor ingresa el mensaje")
    } else {*/
        printAnswer.value = cipher.encode(offset, string);
    }


function decode() {
    let offset = parseInt(document.getElementById("numberSelect").value);
    let inputText = document.getElementById("decipherBox").value;
    let printAnswer = document.getElementById("cipherBox");
    let string = inputText.toUpperCase();
    
    /*if (offset !== Number || offset < 0) {
        alert("Por favor ingresa un número")
    } else */if (string == "" ) {
        alert("Por favor ingresa el mensaje a decodificar")
    } else {
        printAnswer.value = cipher.decode(offset, string);
    }
}

//Llamando a las funciones principales mediante el DOM
inputButton.addEventListener("click", encode);
outputButton.addEventListener("click", decode);
