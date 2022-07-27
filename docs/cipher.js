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
        let inputTextUpper = (newCode - 65 + offsetNum) % 26 + 65;
        let inputRewrite = String.fromCharCode(inputTextUpper);
        yourTextEncode += inputRewrite;
      } else if (newCode <= 122 && newCode >= 97) {
        let inputTextLower = (newCode - 97 + offsetNum) % 26 + 97;
        let inputRewrite = String.fromCharCode(inputTextLower);
        yourTextEncode += inputRewrite;
      } else if (newCode <= 64 && newCode >= 32) {
        let inputTextSpecial = newCode;
        let inputRewrite = String.fromCharCode(inputTextSpecial);
        yourTextEncode += inputRewrite;
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
      //Caesar decryption designed formula ((x +65 - #posición) % 26 +65)
      if (newDecode <= 90 && newDecode >= 65) {
        let inputTextUpper = (newDecode + 65 - offsetNum) % 26 + 65;
        let inputRewrite = String.fromCharCode(inputTextUpper);
        yourTextDecode += inputRewrite;
      } else if (newDecode <= 122 && newDecode >= 97) {
        let inputTextLower = (newDecode - 122 - offsetNum) % 26 + 122;
        let inputRewrite = String.fromCharCode(inputTextLower);
        yourTextDecode += inputRewrite;
      } else if (newDecode <= 64 && newDecode >= 32) {
        let inputTextSpecial = newDecode;
        let inputRewrite = String.fromCharCode(inputTextSpecial);
        yourTextDecode += inputRewrite;
      }
    }
    return yourTextDecode;
  }

};

export default cipher;