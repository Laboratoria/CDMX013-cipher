import cipher from './cipher.js';

console.log(cipher);

//addEventListener es un método que ejecuta la acción que tiene que pasar cuando interactúen con lo que va antes del punto, después, ejecuta la función a su derecha
//innerHTML devuelve el texto con todo el formato, innerText devuelve todo el contenido sin formato

const entrada = document.getElementById("btncodif");
const offSet = document.getElementById("offset");
entrada.addEventListener("click", function(){
    const text = document.getElementById("txt");
    const textvalue = text.value;
    let unsolvedTxt = "";
    const offsetValue = Number(offset.value);
     
   for (let i = 0; i < textvalue.length; i++){
        let textoCifrado = textvalue[i].charCodeAt();
        //console.log(textoCifrado);
        if (textoCifrado >=65 && textoCifrado <=90){
            let codedMsg = (textoCifrado - 65 + offsetValue) %26 + 65;
            //console.log (codedMsg)
            //console.log(textoCifrado)
            unsolvedTxt += String.fromCharCode(codedMsg);
       }    else if (textoCifrado >=97 && textoCifrado <=122){
            let codedMsg = (textoCifrado - 97 + offsetValue) %26 + 97;
            //console.log (codedMsg)
            unsolvedTxt += String.fromCharCode(codedMsg);
       }

            //console.log(textvalue[i])
            //console.log((textvalue.charCodeAt(i)-65)+offsetValue);
            //console.log(finalTxt)
    }
        rslt.value = unsolvedTxt;
})

const resultado = document.getElementById("btndecodif");
const offset = document.getElementById("offset");
resultado.addEventListener("click", function(){
    const decodedText = document.getElementById("rslt");
    const outputText = decodedText.value;
    let solvedTxt = "";
    const offsetValue = Number(offset.value);
    const cajaResultado = document.getElementById("txt");

    for (let i = 0; i < outputText.length; i++){
        let textoCifrado = outputText[i].charCodeAt();
        //console.log(textoCifrado)
        if (textoCifrado >=65 && textoCifrado <=90){
            let decodedMsg = (textoCifrado - 90 - offsetValue) %26 + 90; //Para que la operación funcione, es necesario hacer la operación al revés, es decir, que se reste noventa.
            //console.log (decodedMsg)
            //console.log(textoCifrado)
            solvedTxt += String.fromCharCode(decodedMsg);
            //console.log(solvedTxt)
       }    else if (textoCifrado >=97 && textoCifrado <=122){
            let decodedMsg = (textoCifrado -122 - offsetValue) %26 + 122;
            //console.log (decodedMsg)
            solvedTxt += String.fromCharCode(decodedMsg);
       }

            //console.log(outputText[i])
            //console.log((outputText[i].charCodeAt()-65)+offsetValue);
            //console.log(solvedTxt)
      
    }
          cajaResultado.value = solvedTxt;
    //txt.innerHTML = solvedTxt;
    //document.getElementById("txt").innerText = "Tu mensaje está listo";
})
