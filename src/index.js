import cipher from './cipher.js';

//console.log(cipher);

/*addEventListener es un método que ejecuta la acción que tiene que pasar cuando interactúen con lo que va antes del punto, después, ejecuta la función a su derecha
innerHTML devuelve el texto con todo el formato, innerText devuelve todo el contenido sin formato*/

const entrada = document.getElementById("btncodif");
entrada.addEventListener("click", function(){
    const text = document.getElementById("txt");
    const textvalue = text.value;
    const offsetValue = Number(offset.value);
     
        document.getElementById("rslt").value = cipher.encode(offsetValue, textvalue);
})

const resultado = document.getElementById("btndecodif");
const offset = document.getElementById("offset");
resultado.addEventListener("click", function(){
    const decodedText = document.getElementById("rslt");
    const outputText = decodedText.value;
    const offsetValue = Number(offset.value);
    const cajaResultado = document.getElementById("txt");

          cajaResultado.value = cipher.decode(offsetValue, outputText);
})
