import cipher from './cipher.js';

const encode = document.getElementById("bC");
const decode = document.getElementById("bD");

encode.addEventListener('click', function () {
  const mess = document.getElementById("mess").value;
  const offset = document.getElementById("offset").value;
  document.getElementById("respMess").innerHTML = (cipher.encode(offset, mess));
}),

  decode.addEventListener('click', function () {
    const mess = document.getElementById("mess").value;
    const offset = document.getElementById("offset").value;
    document.getElementById("respMess").innerHTML = (cipher.decode(offset, mess));
  })


