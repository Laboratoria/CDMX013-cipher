const cipher = {  // Esta guardando las funciones dentro de un objeto
  // toda la logica
  encode: function (offset, plainText) {
    let solved = ""
    if (typeof offset == 'number' && typeof plainText == 'string') {

      for (let i = 0; i < plainText.length; i++) {
        let asciiNum = plainText[i].charCodeAt();
        //console.log(asciiNum);
        if (asciiNum >= 65 && asciiNum <= 90) {
          let codedMessage = (asciiNum - 65 + offset) % 26 + 65;
          //console.log(codedMessage);
          solved += String.fromCharCode(codedMessage);
          // console.log("solved",solved);
        } else if (asciiNum >= 97 && asciiNum <= 122) {
          let codedMessage = (asciiNum - 97 + offset) % 26 + 97;
          //console.log(codedMessage);
          solved += String.fromCharCode(codedMessage);
        } else if (asciiNum == 32) {
          solved += plainText[i];
        }
      }
      return solved;
      //console.log(solved); 
    } else {
      throw TypeError('wrong argument type');
    }
  },
  decode: function (offset, decodedTxt) {
    if (typeof offset == 'number' && typeof decodedTxt == 'string') {
      let result = ""
      // 33 -> 33%26 = 7. el "complemento de 7 a 26 es 19 o la resta de 26 y 7 = 19"
      // 26 - 7 = 19
      // 26 - (33%26) = 19
      offset = 26 - (offset % 26);
      for (let i = 0; i < decodedTxt.length; i++) {
        let asciiNum = decodedTxt[i].charCodeAt();
        //console.log(asciiNum); 
        if (asciiNum >= 65 && asciiNum <= 90) {
          let codedMessage = (asciiNum - 65 + offset) % 26 + 65;
          result += String.fromCharCode(codedMessage);
          //  console.log(result);
        } else if (asciiNum >= 97 && asciiNum <= 122) {
          let codedMessage = (asciiNum - 97 + offset) % 26 + 97;
          // console.log(decodedMsg);
          result += String.fromCharCode(codedMessage);
        } else if (asciiNum == 32) {
          result += decodedTxt[i];
        }
      }
      return result;

    } else {
      throw TypeError('wrong argument type')
    }
  }
}
export default cipher;
