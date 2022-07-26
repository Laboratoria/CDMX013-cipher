

const cipher = {
  
     encode: function (offset, string) {
        
        let m = '';
        let SToN="";
        let j="";

  if (document.getElementById("offsetID").value < 0 || document.getElementById("offsetID").value == 0 ){
          alert(" 😱 Por favor introduce un número positivo mayor a cero ➕ 😊")

  } else {
        
        for(let i=0; i<string.length; i++){
            
            SToN =string.charCodeAt(i);//string to number
          if(SToN != 32){  
            
             j = Math.abs(SToN - 65 + offset) % 26 + 65; //Convierte a numero y hago operaciones para cifrado
             m += String.fromCharCode(j); //devuelve a ASCII
            }else {
            m += String.fromCharCode(SToN);
            }
        }  
        return m;
}
      },
//////////////////////////////////////////////////////////////////
    decode: function (offset, string) {
    let m = '';
      let SToN="";
      let j="";

  if (document.getElementById("offsetID").value < 0 || document.getElementById("offsetID").value == 0 ){
        alert(" 😱 Por favor introduce un número positivo mayor a cero ➕ 😊")

  //} else if{

  }else{
      
      for(let i=0; i<string.length; i++){
          SToN =string.charCodeAt(i);//string to number

          
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
              m += String.fromCharCode(j); //devuelve a ASCII
              }  
        }
      }  
      return m;
  }
}
};




export default cipher;
////////////////////////


