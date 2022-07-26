

const cipher = {
  
     encode: function (offset, string) {
        //console.log(offset)
        //console.log(string)
        let m = '';
        let SToN="";
        let j="";

  if (document.getElementById("offsetID").value < 0){
          alert(" 😱 Por favor introduce un número positivo ➕ 😊")
  } else {
        
        for(let i=0; i<string.length; i++){
            //console.log(string.charCodeAt(i));
            SToN =string.charCodeAt(i);//string to number
          if(SToN != 32){  
            //console.log(SToN);
             j = Math.abs(SToN - 65 + offset) % 26 + 65; //Convierte a numero y hago operaciones para cifrado
             //console.log(Math.abs(SToN))
             //console.log(j);
             m += String.fromCharCode(j); //devuelve a ASCII
             //console.log(m)
            }else {
            m += String.fromCharCode(SToN);
            }
        }
        //document.getElementById("m").innerHTML = "Tu mensaje cifrado es: " + m;  
        return m;
}
      },
//////////////////////////////////////////////////////////////////
    decode: function (offset, string) {
      //console.log(offset)
      //console.log(string)
    let m = '';
      let SToN="";
      let j="";

  if (document.getElementById("offsetID").value < 0){
      alert(" 😱 Por favor introduce un número positivo ➕ 😊")
  } else {
      
      for(let i=0; i<string.length; i++){
         //console.log(string.charCodeAt(i));
          SToN =string.charCodeAt(i);//string to number
          //console.log(SToN);

          
              let g = (SToN -65 - offset) 
        if(SToN == 32){
          m += String.fromCharCode(SToN); 
        }else { 
              if(g<0){
                
                j = 91 + (g % 26);
              
                m += String.fromCharCode(j); //devuelve a ASCII
                //console.log(m)

              }else{

              j = (SToN -65 - offset) % 26 + 65; //Convierte a numero y hago operaciones para cifrado
              //console.log(SToN -65 - offset );
              //console.log(SToN -65 - offset )%26;
              //console.log(j);
              m += String.fromCharCode(j); //devuelve a ASCII
              //console.log(m)
              //console.log(document.getElementById("m").value);*/
              }  
        }
      }
      //document.getElementById("m").innerHTML = "Tu mensaje cifrado es: " + m;  
      return m;
  }
}
};
/////metodos cipher.enconde y cipher.decode/
//cipher.encode();
//cipher.encode();



export default cipher;
////////////////////////


