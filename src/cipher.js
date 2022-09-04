const cipher = {  //función codificar...*/

  encode: function (offset, mess) {

    if (offset == "") throw (TypeError("offset inválido"));
    if (offset <= 0) throw (TypeError("offset inválido"));
   

    let respMess = "";
    let letterNo = 0;

    for (let cont = 0; cont < mess.length; cont++) {
      letterNo = mess.charCodeAt(cont);
      if (letterNo > 64 && letterNo < 91) {
        letterNo = (letterNo - 65 + parseInt(offset)) % 26 + 65;
       } 
      
       if (letterNo > 96 && letterNo < 123) {
        letterNo = (letterNo - 97 + parseInt(offset)) % 26 + 97;
       } 
       respMess += String.fromCharCode(letterNo);
    }

    return respMess;
  },


  // función decodificar */
  decode: function (offset, mess) {
    if (offset === "" || offset <= 0) throw (TypeError("offset inválido"));
    
    let respMess = "";
    let letterNo = 0;

    for (let cont = 0; cont < mess.length; cont++) {
      letterNo = mess.charCodeAt(cont);
      if (letterNo >= 65 && letterNo <= 90) {
        letterNo = (letterNo - 65 - offset) % 26 + 65;
        if (letterNo < 65) {
          letterNo += 26;
        }
        
       }
       if (letterNo >= 97 && letterNo <= 122) {
        letterNo = (letterNo - 97 - offset) % 26 + 97;
        if (letterNo < 97) {
          letterNo += 26;
        }
        
       }
       respMess += String.fromCharCode(letterNo);
    }
    return respMess;
  },

}

export default cipher;
