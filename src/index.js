import cipher from './cipher.js';

console.log(cipher);

let entrada = document.getElementById("btncodif");
/*
addEventListener es un método que ejecuta la acción que tiene que pasar cuando interactúen con lo que va antes del punto, después, ejecuta la función a su derecha
*/

entrada.addEventListener("click", saludo)

function saludo (){
    alert("Hola, vamos a comenzar");
}

let resultado = document.getElementById("btndecodif");
resultado.addEventListener("click", despedida)

function despedida (){
    alert("Tu mensajes está listo");
}

cadena.toUpperCase() /*sirve para que las letras que se introduzcan se conviertan en mayúsculas*/
charCode() fromCharCode() /*para convertir las letras a ASCII y viceversa*/
