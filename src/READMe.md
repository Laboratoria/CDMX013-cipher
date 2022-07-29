# Cifrado César

## Índice

* [1. Objetivo de esta página](#1-Objetivo de esta página)
* [2. Proceso y decisiones de diseño.](#2-Proceso y decisiones de diseño.)
* [3. Como ayuda está página a los usuarios.](#3 Como ayuda está página a los usuarios)
* [4. Cómo descargar, instalar y ejecutar la aplicación](#4-Cómo descargar, instalar y ejecutar la aplicación)

***

## 1. Objetivo de esta página.

Logra mantener contacto con tu persona favorita mediante mensajes que sólo ustedes puedan cifrar/descifrar con un número secreto, 
Te ha pasado que siempre que hay "moros en la costa", que revisan tus dispositivos móviles, computadoras o tablets. 
Imaginate que puedes enviar mensajes sin temor a que si prestas tu teléfo, dejas activa tu cuenta de mensajeria o tu computadora, 
no serán expuestas tus conversaciones, ya que no tendrán sintaxis ni coherencia esos mensajes, quizá los intrusos piensen que estas 
un poco loc@ o quizá que hablas idioma alienigena (muy actual y moderno por cierto) pero no será así, estarán cifradas, y sólo tu persona
especial y tú tendrán la llave, ese número secreto que puede ser por ejemplo: de el día que se conocieron o el día de su cumpleaños, 
el número de la suerte, la suma de las letras que componen el nombre de ambos, en fin ese número que los identifica y que sólo ustedes conocen.
No mencionaremos el tipo de cifrado para que tus mensajes esten a salvo y no demos pistas a esos intrusos de averiguarlos 🕵️‍♂️

![caeser-cipher]("image/mensaje.gif")

## 2. Proceso y decisiones de diseño

El concepto de está página se baso, en mensajería entre amigos, parejas, hermanos que son vigilados y no tienen privacidad,
es por eso que el diseño de la página tiene un diseño fuera de lo tradicional como corazones tonos pasteles por citar unos ejemplos.

Consta de 3 archivos html, implica que son 3 vistas: página principal que describe de que va la página y eliges la opción que de cifrar o descifrar, 
página de cifrar donde 2 datos importantes uno de ellos es el texto a cifrar y en el recuadro siguiente tu llave secreta (offset) que indica los números a desplazarse,
similar a esta página esta la tercera y última que solo cambia que ingresas el texto descifrado, la llave secreta es la misma que ingresas en cifrar y al presionar
el botón de cifrar o descifrar te muestra el texto correspondiente en cada una de ellas, adicional del botón de cifrar o descifrar esta el botón de inicio
para que el usurio se pueda regresar a la página de inicio.


* Boceto en papel del diseño de la página.
* Boceto en figma del diseño de la página.
![webpace-design]("https://www.figma.com/file/gGdeqVZE3gaQJqdYJF3r3q/Ceasar-cipher?node-id=4%3A34")
* Elaboracion de código 

Al final de la elaboración de este proyecto se consiguió que el cifrado se pueda realizar con letras mayúsculas y minúsculas, cabe recalcar que otro tipo de 
texto como espacio, signos de puntuación, números y la letra  Ñ y ñ no cambian en el proceso del cifrado o descifrado del texto.

## 3. Como ayuda está página a los usuarios

Está página ayuda a los usuarios a mantener privacidad en sus conversaciones, al poder copiar y pegar los mensajes cifrados y enviarlos por su mensajería 
instantanea preferida, evita que aquellos intrusos o personas no deseadas que revisan los dispositivos del usuario no logren comprender estos mensajes
ya que no tendran sentido o coherencia los textos, y aún encontrada está página para tratar de descifrarlos tendrá que saber la llave especifica que lo 
descifra.

## 4. Cómo descargar, instalar y ejecutar la aplicación

Desde el editor de código fuente Visual Studio Code se ejecuta el programa mediante alguana terminal como git bash, power shell escribiendo
los comandos `npm start` al ejecutarse arroja una url que se abre copiando y pegando en el navegador o bien con el boton `ctrl` + `click` sobre este link
para detener el funcionalidad del código basta con teclear `ctrl` + `c` sobre cualquier parte de la terminal.