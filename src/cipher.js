

const cipher = {

     encode: function (offset, string) {
        
        let m = '';
        for(let i=0; i<=string.length; i++){
          
            let SToN ='string'.charCodeAt[i];//string to number
            let j = (SToN[i]-65+offset)%26 + 65; //Convierte a numero y hago operaciones para cifrado
            m = j.fromCharCode[i]; //devuelve a ASCII
            //console.log(document.getElementById("m").value);
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


