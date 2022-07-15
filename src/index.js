import cipher from './cipher.js';

console.log(cipher);
let resultados = document.getElementById("codificar");
/*
addEdentListener es un método que ejecuta la acción que tiene que pasar cuando interactúen con lo que va antes del punto, después, ejecuta la función a su derecha
*/

resultados.addEventListener("click", saludo)

function saludo (){
    alert("Hola, cosa");
}
