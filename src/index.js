import cipher from './cipher.js';

//console.log(cipher);
//cipherTEXT(){
 //   event.preventDefault() // Previene recarga del navegador
 //   console.log("esto va bien")
//}

// const variable que no se reasigna o /// let variable que se vuelve a reasignar 
let GetCipherText=document.getElementById("cipherFunction"); 
let string = document.getElementById("message");
let offset = document.getElementById("offsetID");

GetCipherText.addEventListener("click", function (event){
    event.preventDefault() // Previene recarga del navegador
    //alert("esto va bien");
    //console.log(document.getElementById("message").value);
    //console.log(document.getElementById("offsetID").value);
  
   
    // alert(cipher.encode(offset, string));
    //cipher.encode(offset, string);
    //document.getElementById("m").innerHTML = "Tu mensaje cifrado es: " + m;
   document.getElementById("cipherText").innerHTML = "Tu mensaje cifrado es: " + cipher.encode(Number(offset.value),string.value);
    
});


