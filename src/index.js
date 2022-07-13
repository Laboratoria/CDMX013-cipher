import cipher from './cipher.js';

console.log(cipher);

function showCipherBox() {
    if (document.getElementById("buttonOne").checked) {
        document.getElementById("rootSecondView").style.display= "block";
        document.getElementById("rootFirstView").style.display= "none";
    }
    //let secondView=document.getElementById("rootSecondView");
    //let disappearFirst=document.getElementById("rootFirstView");
    //disappearFirst.style.display="none";
    //secondView.style.display="block";
      }