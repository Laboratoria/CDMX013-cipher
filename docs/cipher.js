const cipher = {
//key: value (first key for encoding)
  encode: (offset, textEncode) => {

//Conditionals for throwing TypeError. This throws error too: if(offset == 0) throw "No es un número válido";
    if(offset == 0) throw (TypeError("No es un número válido"));
    if(offset == null || textEncode== []) throw(TypeError("Por favor ingrese los valores"));

//Working with loops
    let yourTextEncode = [];
    for (let i = 0; i < textEncode.length; i++) {
      let newCode = textEncode.charCodeAt(i);
      let offsetNum= parseInt(offset);
      
//Fomula Caesar cipher:  ((ASCII - 65 + #offset)% 26 +65)
      let inputTextForm = (newCode - 65 + offsetNum) % 26 + 65;
      let inputRewrite = String.fromCharCode(inputTextForm);
      yourTextEncode += inputRewrite;
    }
    return yourTextEncode;
  },

  //second key for decoding
  decode: function (offset, textDecode) {

    if(offset == 0) throw(TypeError("No es un número válido"));
    if(offset == null || textDecode== []) throw(TypeError("Por favor ingrese los valores"));

    let yourTextDecode = [];
    for (let i = 0; i < textDecode.length; i++) {
      let newCode1 = textDecode.charCodeAt(i);
      let offsetNum= parseInt(offset);
  //Caesar decryption designed formula ((x +65 - #posición) % 26 +65)
      let inputTextForm = (newCode1 + 65 - offsetNum) % 26 + 65;
      let inputRewrite = String.fromCharCode(inputTextForm);
      yourTextDecode += inputRewrite;
    }

    return yourTextDecode;
  }

};

export default cipher;