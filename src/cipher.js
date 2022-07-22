

const cipher = {
  
     encode: function (offset, string) {
        console.log(offset)
        console.log(string)
      let m = '';
        let SToN="";
        let j="";
        
        for(let i=0; i<string.length; i++){
            //console.log(string.charCodeAt(i));
            SToN =string.charCodeAt(i);//string to number
            console.log(SToN);
             j = (SToN-65 + offset) % 26 + 65; //Convierte a numero y hago operaciones para cifrado
             console.log(j);
             m += String.fromCharCode(j); //devuelve a ASCII
             console.log(m)
            //console.log(document.getElementById("m").value);*/
        }
        //document.getElementById("m").innerHTML = "Tu mensaje cifrado es: " + m;  
        return m;
    }
};
/////metodos cipher.enconde y cipher.decode/
//cipher.encode();
//cipher.encode();



export default cipher;
////////////////////////


