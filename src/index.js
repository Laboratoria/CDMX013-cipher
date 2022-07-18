
import {pressButton, displayView} from './newView.js'; 
pressButton.addEventListener("click", displayView);


import cipher from './cipher.js';
//console.log(cipher);

//¿Esta parte debería ir en la cipher

function cipherText(){
    const textCode= document.getElementById("cipherBox").value;
    let answerCode= textCode.toUpperCase();
    const printAnswer= document.getElementById("decipherBox");

    
            if (textCode!== null)
            printAnswer.value= answerCode;
    }

function decipherText(){
    const textDecode= document.getElementById("decipherBox").value;
    const answerDecode= textDecode.toUpperCase();
    const printAnswer2= document.getElementById("cipherBox");

    
            if (textDecode!== null)
            printAnswer2.value= answerDecode;
    }



// estas son las varianles que te llevan a realizar las interacciones
var pressButton1= document.getElementById("cipherButton");
var pressButton2= document.getElementById("decipherButton");

  //Estos botones son las interacciones que se van a observar en la segunda pantalla

    pressButton1.addEventListener("click", cipherText);
    pressButton2.addEventListener("click", decipherText);


 




/*
function numberCipher() {
   let numberChoosen
    let letterChoosen
    (numberChoosen)
}
*/