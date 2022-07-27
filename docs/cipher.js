const cipher = {
  //key: value (first key for encoding)
  encode: (offset, textEncode) => {

    //Conditionals for throwing TypeError. This throws error too: if(offset == 0) throw "No es un número válido";
    if (offset == 0) throw (TypeError("No es un número válido"));
    if (offset == null || textEncode == []) throw (TypeError("Por favor ingrese los valores"));

    //Working with loops
    let yourTextEncode = [];
    for (let i = 0; i < textEncode.length; i++) {
      let newCode = textEncode.charCodeAt(i);
      let offsetNum = parseInt(offset);

      //Fomula Caesar cipher:  ((ASCII - 65 + #offset)% 26 +65)
      if (newCode <= 90 && newCode >= 65) {
        let inputTextUpper = String.fromCharCode((newCode - 65 + offsetNum) % 26 + 65);
        yourTextEncode += inputTextUpper;
      } else if (newCode <= 122 && newCode >= 97) {
        let inputTextLower = String.fromCharCode((newCode - 97 + offsetNum) % 26 + 97);
        yourTextEncode += inputTextLower;
      } else if (newCode <= 64 && newCode >= 32) {
        let inputTextSpecial = String.fromCharCode(newCode);
        yourTextEncode += inputTextSpecial;
      } else if(newCode === 191 || newCode === 161 || newCode===241 || newCode===209){
        let inputTextSpecial = String.fromCharCode(newCode);
        yourTextEncode += inputTextSpecial;
      }
    }
    return yourTextEncode;
  },

  //second key for decoding
  decode: function (offset, textDecode) {

    if (offset == 0) throw (TypeError("No es un número válido"));
    if (offset == null || textDecode == []) throw (TypeError("Por favor ingrese los valores"));

    let yourTextDecode = [];
    for (let i = 0; i < textDecode.length; i++) {
      let newDecode = textDecode.charCodeAt(i);
      let offsetNum = parseInt(offset);
      //Caesar decryption designed formula ((x -90 - #posición) % 26 +90)
      if (newDecode <= 90 && newDecode >= 65) {
        let inputTextUpper = String.fromCharCode((newDecode - 90 - offsetNum) % 26 + 90);
        yourTextDecode += inputTextUpper;
      } else if (newDecode <= 122 && newDecode >= 97) {
        let inputTextLower = String.fromCharCode((newDecode - 122 - offsetNum) % 26 + 122);
        yourTextDecode += inputTextLower;
      } else if (newDecode <= 64 && newDecode >= 32) {
        let inputTextSpecial = String.fromCharCode(newDecode);
        yourTextDecode += inputTextSpecial;
      }else if(newDecode === 191 || newDecode === 161 || newDecode===241 || newDecode===209){
        let inputTextSpecial = String.fromCharCode(newDecode);
        yourTextDecode += inputTextSpecial;
      }
    }
    return yourTextDecode;
  }

};

export default cipher;