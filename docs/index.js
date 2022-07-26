//Display second view
import { pressButton, displayView } from './newView.js';
pressButton.addEventListener("click", displayView);

import cipher from './cipher.js';
//DOM Elements
const inputButton = document.getElementById("cipherButton");
const outputButton = document.getElementById("decipherButton");

//Bringing info to the interface
function encode() {
    let offset = (document.getElementById("numberSelect").value);
    let inputText = document.getElementById("cipherBox").value;
    let printAnswer = document.getElementById("decipherBox");
    let textEncode = inputText.toUpperCase();
    printAnswer.value = cipher.encode(offset, textEncode);
}

function decode() {
    let offset = document.getElementById("numberSelect").value;
    let inputText = document.getElementById("decipherBox").value;
    let printAnswer = document.getElementById("cipherBox");
    let textDecode = inputText.toUpperCase();
    printAnswer.value = cipher.decode(offset, textDecode);
}

//Calling main fuctions
inputButton.addEventListener("click", encode);
outputButton.addEventListener("click", decode);
