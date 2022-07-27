const cipher = {  // Esta guardando las funciones dentro de un objeto
// toda la logica
 encode:function(offset,plainText){
  let solved = ""
    if(typeof offset == 'number' && typeof plainText == 'string'){
    
    for (let i = 0; i< plainText.length; i++){
        let asciiNum = plainText[i].charCodeAt();
        //console.log(asciiNum);
        if (asciiNum >= 65 && asciiNum <= 90){
          let codedMessage = (asciiNum - 65 + offset) %26 + 65;
          //console.log(codedMessage);
          solved += String.fromCharCode(codedMessage);
         // console.log("solved",solved);
        } else if (asciiNum >= 97 && asciiNum <= 122){
            let codedMessage = (asciiNum - 97 + offset) %26 + 97;
            //console.log(codedMessage);
            solved += String.fromCharCode(codedMessage);
          } 
    } 
    return solved; 
    //console.log(solved); 
  }else {
   throw TypeError('wrong argument type');
  }
  },
  decode:function(offset,outputText){
    if(typeof offset == 'number' && typeof outputText == 'string'){
    let result = ""
    for(let i = 0; i< outputText.length; i++){
      let asciiNum = outputText[i].charCodeAt();
      //console.log(asciiNum); 
      if (asciiNum >=65 && asciiNum <=90){
        let decodedMsg = asciiNum -(offset%26);
        if (asciiNum < 65){
          decodedMsg = asciiNum -(offset%26);
          //console.log(decodedMsg + 'esta imprimiendo esto');
          //result += String.fromCharCode(decodedMsg);
        }
        //console.log(decodedMsg);
        result += String.fromCharCode(decodedMsg);
      //  console.log(result);
      } else if (asciiNum >=97 && asciiNum <=122){
          let decodedMsg = asciiNum -(offset%26)
         // console.log(decodedMsg);
          result += String.fromCharCode(decodedMsg);
      }
    }
    return result;
  //return unsolved;
  
  }else {
  throw TypeError('wrong argument type')
}
}
}


export default cipher;
