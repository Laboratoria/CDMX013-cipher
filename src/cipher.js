const cipher = {
  // ...
  encode: function(offsetValue, textvalue){
    let unsolvedTxt = "";
    if (typeof offsetValue == 'number' && typeof textvalue == 'string'){
      
    for (let i = 0; i < textvalue.length; i++){
      let textoCifrado = textvalue[i].charCodeAt();
      //console.log(textoCifrado);
      if (textoCifrado >=65 && textoCifrado <=90){
          let codedMsg = (textoCifrado - 65 + offsetValue) %26 + 65;
          //console.log (codedMsg)
          //console.log(textoCifrado)
          unsolvedTxt += String.fromCharCode(codedMsg);
     }    else if (textoCifrado >=97 && textoCifrado <=122){
          let codedMsg = (textoCifrado - 97 + offsetValue) %26 + 97;
          //console.log (codedMsg)
          unsolvedTxt += String.fromCharCode(codedMsg);
     }
  }
  return unsolvedTxt;
    } else{
    throw TypeError ("Wrong argument type");
  
   }
},
  decode: function(offsetValue, outputText){
    
    if (typeof offsetValue == 'number' && typeof outputText == 'string'){
      let solvedTxt = "";
    for (let i = 0; i < outputText.length; i++){
     let textoCifrado = outputText[i].charCodeAt();
     //console.log(textoCifrado)
    if (textoCifrado >=65 && textoCifrado <=90){
        let decodedMsg = (textoCifrado - 90 - offsetValue) %26 + 90; 
        //console.log (decodedMsg)
        //console.log(textoCifrado)
        solvedTxt += String.fromCharCode(decodedMsg);
   }    else if (textoCifrado >=97 && textoCifrado <=122){
        let decodedMsg = (textoCifrado -122 - offsetValue) %26 + 122;
        //console.log (decodedMsg)
        solvedTxt += String.fromCharCode(decodedMsg);
}
  }
    return solvedTxt;
      } else {
      throw TypeError ('Wrong argument type')
  }
}
}
export default cipher;
