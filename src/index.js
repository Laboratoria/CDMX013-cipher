import cipher from './cipher.js';

console.log(cipher);

//addEventListener es un método que ejecuta la acción que tiene que pasar cuando interactúen con lo que va antes del punto, después, ejecuta la función a su derecha
//innerHTML devuelve el texto con todo el formato, innerText devuelve todo el contenido sin formato

const entrada = document.getElementById("btncodif");
const offSet = document.getElementById("offset");
let finalTxt = '';
//console.log(entrada)
entrada.addEventListener("click", function(){
    const text = document.getElementById("txt");
    const textvalue = text.value;
    const offsetValue = Number(offset.value);
       // console.log(text)
    
    for (let i = 0; i < textvalue.length; i++){
        let textoCifrado = (textvalue.charCodeAt(i)-65)+offsetValue;
        finalTxt += textoCifrado
       //console.log(textvalue[i])
       //console.log((textvalue.charCodeAt(i)-65)+offsetValue);
    }
    let texto = String.fromCharCode(65);
    document.getElementById("rslt").value = finalTxt
        
})

const resultado = document.getElementById("btndecodif");
resultado.addEventListener("click", function(){
    document.getElementById("rslt").innerText = "Tu mensaje está listo";
})


/*
cadena.toUpperCase() //sirve para que las letras que se introduzcan se conviertan en mayúsculas
charCode() .fromCharCode() //para convertir las letras a ASCII y viceversa

*/