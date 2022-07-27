

const cipher = {

  encode: function (offset, string) {

    let result = ''; //acá se acumularan los resultados de las operaciones de cada caracter
  

    for (let i = 0; i < string.length; i++) {
      const character = string.charCodeAt(i); // de cadena a numero ascii

      if (65 <= character && character <= 90) {   //letras mayúsculas
        const newCharacter = String.fromCharCode((character - 65 + offset) % 26 + 65);
        result += newCharacter;
      } else if (97 <= character && character <= 122) {  //letras minúsculas
        const newCharacter = String.fromCharCode((character - 97 + offset) % 26 + 97);
        result += newCharacter;
      } else {                                    // otros caracteres que no sean letras las deja igual
        result += String.fromCharCode(character);//considerando cualquier otro caracter que no sea letra
      }
    }
    return result;

  },
  //////////////////////////////////////////////////////////////////
  decode: function (offset, string) {

    let result = '';
    offset = 26 - (offset % 26); //offset es ahora el "complemento del modulo" si offset es 7 por ejemplo ahora sera 27-7=19
                                 

    for (let i = 0; i < string.length; i++) {
      const character = string.charCodeAt(i); // de cadena a número ascii

      if (65 <= character && character <= 90) {   //letras mayúsculas
        const newCharacter = String.fromCharCode((character - 65 + offset) % 26 + 65);
        result += newCharacter;
      } else if (97 <= character && character <= 122) {  //letras minúsculas
        const newCharacter = String.fromCharCode((character - 97 + offset) % 26 + 97);
        result += newCharacter;
      } else {                                    // otros caracteres que no sean letras las deja igual
        result += String.fromCharCode(character);//considerando cualquier otro caracter que no sea letra
      }
    }
    return result;
  }
};


//console.log(cipher.encode(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ"));//"HIJKLMNOPQRSTUVWXYZABCDEFG"
//console.log(cipher.decode(33, "HIJKLMNOPQRSTUVWXYZABCDEFG"));//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//console.log(cipher.encode(33, "HOLA MUNDO"));//"HIJKLMNOPQRSTUVWXYZABCDEFG"
//console.log(cipher.decode(33, "OVSH TBUKV"));//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//console.log(cipher.decode(27, "A B C . +"));//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export default cipher;
////////////////////////


