import cipher from './cipher.js';

console.log(cipher);

//addEventListener es un método que ejecuta la acción que tiene que pasar cuando interactúen con lo que va antes del punto, después, ejecuta la función a su derecha
//innerHTML devuelve el texto con todo el formato, innerText devuelve todo el contenido sin formato

const entrada = document.getElementById("btncodif");
const offSet = document.getElementById("offset");
entrada.addEventListener("click", function(){
    const text = document.getElementById("txt");
    const textvalue = text.value;
    let finalTxt = "";
    const offsetValue = Number(offset.value);
     
   for (let i = 0; i < textvalue.length; i++){
        let textoCifrado = textvalue[i].charCodeAt();
        console.log(textoCifrado);
        if (textoCifrado >=65 && textoCifrado <=90){
            let codedMsg = (textoCifrado - 65 + offsetValue) %26 + 65;
            //console.log (codedMsg)
            //console.log(textoCifrado)*/
            finalTxt += String.fromCharCode(codedMsg);
       }   console.log(textvalue[i])
            console.log((textvalue.charCodeAt(i)-65)+offsetValue);
            console.log(finalTxt)
    }
        rslt.innerHTML = finalTxt;
})

const resultado = document.getElementById("btndecodif");
resultado.addEventListener("click", function(){
    document.getElementById("rslt").innerText = "Tu mensaje está listo";
})
