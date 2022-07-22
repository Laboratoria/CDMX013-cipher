# Cifrado César

## Índice

  - [1. ¿Qué es el cifrado césar?](#1-qué-es-el-cifrado-césar)
  - [2. Des-cifrando el algoritmo del amor](#2-des-cifrando-el-algoritmo-del-amor)
      - [Definir el producto](#definir-el-producto)
    - [Interfaz de usuarix (UI)](#interfaz-de-usuarix-ui)
  - [3. Desarrollo en Figma](#3-desarrollo-en-figma)
  - [4. Maquetación](#4-maquetación)
    - [Diseño de HTML](#diseño-de-html)
    - [Trabajando en la apariencia](#trabajando-en-la-apariencia)
    - [Desarrollando la funcionalidad](#desarrollando-la-funcionalidad)
  - [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
  - [6. Scrum](#6-scrum)
  - [7. Consideraciones finales](#7-consideraciones-finales)

***

## 1. ¿Qué es el cifrado césar?

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Des-cifrando el algoritmo del amor

En este apartado se encontrará con la información del desarrollo de este proyecto, por ejemplo: planeación del producto, búsqueda de información, pruebas del producto, etc...

Antes de continuar es indispensable mencionar que se analizó a profundidad el Readme del proyecto original para determinar por dónde comenzar a abordarlo, por tal motivo, puede haber similitudes entre lo descrito en ese y el que usted está leyendo.


#### Definir el producto

La primera parte que se realizó fue definir al usuarix y en qué situación podría usar el producto final al responder 3 preguntas fundamentales:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?
* ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

 La plataforma que se diseñó está pensada para parejas que buscan tener un nivel más de intimidad al momento de compartir información fuera del ámbito privado, por ejemplo: "Ana quiere comentarle a su novia que la ama en un post en Facebook pero por diferentes razones no quiere que nadie salvo ella y su pareja sepan el contenido de la información". 
Con este breve ejemplo podemos responder las tres preguntas antes propuestas siendo:
* Parejas sentimentales;
* Comunicarse de forma pública y asincrona sin mostrar sus verdaderos mensajes a ajenos.
* Está resolviendo el problema de conservar la privacidad en el ámbito de las Redes Sociales principalmente.

### Interfaz de usuarix (UI)

Esta interfaz permite al usuarix:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.
  
## 3. Desarrollo en Figma

La imagen del proyecto está pensada en una paleta de colores cálida ya que se considera que es más adecuada con el tema y el target que se predefinió. Así mismo, se conserva un diseño simple _minimalista_ para no distraer al usuarix al utilizar la plataforma.

A continuación se presenta el prototipo desarrollado en Figma con dos vistas:

![prototipo_cipher](https://user-images.githubusercontent.com/107899878/180314367-136be169-8ffb-4b5f-a6ee-61044aa14198.png)

![prototipo_cipher2](https://user-images.githubusercontent.com/107899878/180314405-0bb97061-26a5-458b-9989-c14bb6ce9bb8.png)

## 4. Maquetación

### Diseño de HTML

Una vez determinado el prototipo pasé a la etapa de maquetación en HTML. Durante está etapa implementé los conocimientos adquiridos en la etapa de admisión y el boilerplate proporcionado para crear la primera versión del index que se iba a utilizar a lo largo del proyecto.

Aquí se utilizó HTML semático para darle una estructura adecuada el prototipo planteado en Figma. También se agregó el texto que iba a acompañar a la experiencia del usuarix y se implementaron los input necesarios como botones y cajas de texto.

### Trabajando en la apariencia

Parte importante del proceso de maquetación es darle la apariencia a la web según lo que se tenía planeado (_se puede mejorar en cada ciclo nuevo de trabajo según las nuevas necesidades_) y para eso se utilizó la magia del CSS a la par del contenido en el HTML.

Se implementaron por medio de selectores los cambios en la imagen del index.html determinando _style properties_ como: 

* Fondo de la pantalla.
* Padding.
* Tipo de display.
* Márgenes.
* Tipos de fuentes.
* Tamaño de fuentes.
* Tipos de cajas.

### Desarrollando la funcionalidad

En esta parte trabajé más con JS sin dejar de lado el DOM y el CSS para darle interacción a la página web diseñando desde el papel a la pantalla sin olvidar que la función principal de mi aplicación era el Cifrado César => (x + n )% 26

Utilicé herramientas como las web APIs, características de los datos primitivos (string, número, etc.), declaración de funciones flecha y los parametros, uso de condicionales if...else y operadores ternarios, uso de loops como for, entre otros.

En esta etapa fue complejo aterrizar las ideas que iba teniendo sobre como abordar el problema de estastablecer la función, el llamado a la función y el scope de las variables declaradas. La mejor forma en la que 
pude despejar mis dudas fue probando las ideas que iba teniendo (tomando en cuenta la lógica computacional y la teoría) para visualizar su funcionalidad y corregir posibles errores.

En este proceso de diseño y rediseño de la funcionalidad principal me ayudaba utilizando medios tangibles para plasmar mis ideas como se puede ver en la siguiente imagen.

![IMG_20220720_145334](https://user-images.githubusercontent.com/107899878/180321988-8dbda039-bd64-420c-8156-5260fd1609b0.jpg)

## 5. Objetivos de aprendizaje

En esta sección se identifica los objetivos de aprendizaje que cumplí a lo largo de este primer proyecto:
* [x] Uso de HTML semántico
* [X] Uso de selectores de CSS
* [X] Modelo de caja (box model): borde, margen, padding
* [X] Uso de selectores del DOM
* [ ] Manejo de eventos del DOM (listeners, propagación, delegación)
* [ ] Manipulación dinámica del DOM
* [X] Tipos de datos primitivos
* [X] Strings (cadenas de caracteres)
* [X] Variables (declaración, asignación, ámbito)
* [X] Uso de condicionales (if-else, switch, operador ternario, lógica booleana)
* [X] Uso de bucles/ciclos (while, for, for..of)
* [X] Funciones (params, args, return)
* [X] Pruebas unitarias (unit tests)
* [X] Módulos de ECMAScript (ES Modules)
* [X] Uso de linter (ESLINT)
* [X] Uso de identificadores descriptivos (Nomenclatura y Semántica)
* [X] Git: Instalación y configuración
* [X] Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)
* [X] GitHub: Creación de cuenta y repos, configuración de llaves SSH
* [X] GitHub: Despliegue con GitHub Pages
* [X] Diseñar un producto o servicio poniendo a la usuaria en el centro
* [X] Crear prototipos de alta fidelidad que incluyan interacciones
* [X] Seguir los principios bádsicos de diseño visual

## 6. Scrum

Me gustaría recalcar que durante este proceso de desarrollo trabajé de forma integral con las herramientas de desarrollo web sin perder de vista la funcionalidad principal del producto final. Si bien aún me falta mejorar mi capacidad para usar este tipo de metodología que parte de la incertidumbre, considero necesario mencionar que se cumplío con el desarrollo estableciendo prioridades, añadiendo y reformulando dependiendo de la nueva información con la que se contaba y los feebacks recibidos por parte de la bonita comunidad de Laboratoria.

![IMG_20220721_172535](https://user-images.githubusercontent.com/107899878/180325398-68f16722-b87d-4dec-ad5b-e75806fba852.jpg)

## 7. Consideraciones finales

Uno de los retos más grandes de este proyecto fue lidiar con la incertidumbre de conocer poco sobre los temas que se iban a abordar, lo cual no me permitía tener una planeación precisa de ¿qué hacer? o ¿cuándo? o ¿cómo? Afortunadamente, explorando los recursos propuestos por el equipo de Laboratoria, lxs coaches y mis compañerxs logré determinar una planeación general y achicar los retos que iba afrontando día con día. Una herramienta que me ayudó mucho a organizar mi tiempo e ir avanzando fue realizar un tablero de tareas en Trello.

Finalmente me gustaría mencionar que previo a los eventos de maquetación se realizó la intalación de Git, VSCode y Node JS para poder trabajar adecuadamente en el repositorio local y conectar la información a la web.

## 8. Usa la app

[Des-cifrando el código del amor](https://menamilochomil.github.io/CDMX013-cipher-12-07/)
