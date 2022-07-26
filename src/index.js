import cipher from './cipher.js';

// const variable que no se reasigna o /// let variable que se vuelve a reasignar 
let getCipherText=document.getElementById("cipherFunction"); //id está en el  botón cifrar
let string = document.getElementById("message");// id está en el texto de entrada
let offset = document.getElementById("offsetID");

let getCipherText2 =document.getElementById("cipherFunction2"); //id está en botón descifrar
//let string2 = document.getElementById("message2"); // id está en el texto de entrada
//let offset2 = document.getElementById("offsetID2");// id enté en el dato que ingresa offset


    if(getCipherText === null){   
        //hacemos lo que se requiera en caso de que la variable contenga null
        //si getChipherText es null, es porque NO estamos en cifrar sino en DESCIFRAR  
        getCipherText2.addEventListener("click", function (event){
            event.preventDefault(); // Previene recarga del navegador
            //alert("esto va bien");
            //console.log(document.getElementById("message").value);
            //console.log(document.getElementById("offsetID").value);
            // alert(cipher.encode(offset2, string2));
            //cipher.encode(offset, string);
           // //document.getElementById("m").innerHTML = "Tu mensaje cifrado es: " + m;
           document.getElementById("decipherText").innerHTML = "Tu mensaje cifrado es: " + cipher.decode(Number(offset.value),string.value);
            
        });


        }else if(getCipherText2 === null){
         //sino es porque SÍ estamos en CIFRAR
                getCipherText.addEventListener("click", function (event){
                    event.preventDefault(); // Previene recarga del navegador
                    //alert("esto va bien");
                    //console.log(document.getElementById("message").value);
                    //console.log(document.getElementById("offsetID").value);
                
                
                    // alert(cipher.encode(offset, string));
                    //cipher.encode(offset, string);
                    //document.getElementById("m").innerHTML = "Tu mensaje cifrado es: " + m;
                document.getElementById("cipherText").innerHTML = "Tu mensaje cifrado es: " + cipher.encode(Number(offset.value),string.value);
                    
        });


        }






