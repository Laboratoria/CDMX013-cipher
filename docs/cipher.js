const cipher = {
//primera key del objeto que corresponde al value de cifrado
  encode: (offset, textEncode) => {

// Con esta nomenclatura también arroja el error pero no pasa la prueba sin el TypeError : if(offset == 0) throw "No es un número válido";
    if(offset == 0) throw (TypeError("No es un número válido"));
    if(offset == null || textEncode== []) throw(TypeError("Por favor ingrese los valores"));

//Creamos una variable fuera del loop para que podamos llamarla mediante un return al final con todo lo ocurrido en el ciclo determinado
    let yourTextEncode = [];

//Usamos un loop (for) para iterar dentro del string definiendo que comience por el indice 0, continue hasta que sea menor que el tamaño del string y avance de uno en unoo a manera que recorra todo el string establecido.
    for (let i = 0; i < textEncode.length; i++) {
      let newCode = textEncode.charCodeAt(i);
      let offsetNum= parseInt(offset);
      
//Fómula aplicada del cifrado César ((ASCII - 65 + #posición)% 26 +65)
      let inputTextForm = (newCode - 65 + offsetNum) % 26 + 65;

//Con String.fromCharCode(núm...) encontramos las letras que corresponden a cada número contenido en inputTextForm
      let inputRewrite = String.fromCharCode(inputTextForm);
      yourTextEncode += inputRewrite;
    }
    return yourTextEncode;
  },

  //segunda key del objeto que corresponde al value de decifrado
  decode: function (offset, textDecode) {

    if(offset == 0) throw(TypeError("No es un número válido"));
    if(offset == null || textDecode== []) throw(TypeError("Por favor ingrese los valores"));

    let yourTextDecode = [];
    for (let i = 0; i < textDecode.length; i++) {
      let newCode1 = textDecode.charCodeAt(i);
      let offsetNum= parseInt(offset);
  //Fómula diseñada del decifrado César ((x +65 - #posición) % 26 +65)
      let inputTextForm = (newCode1 + 65 - offsetNum) % 26 + 65;
      let inputRewrite = String.fromCharCode(inputTextForm);
      yourTextDecode += inputRewrite;
    }

    return yourTextDecode;
//HIJKLMNOPQRSTUVWXYZABCDEFG
// ABCDEFGHIJKLMOPQRSTUVWXYZ
  }

};

export default cipher;
