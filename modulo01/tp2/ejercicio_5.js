/* Ejercicio 5:
Crear una función que muestre información sobre una cadena de texto que se le pasa como
argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada
sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

En esta función se utiliza el método "toUpperCase()" y "toLowerCase()" para comparar 
la cadena original con su versión en mayúsculas y minúsculas.
La función determina el "tipoCadena" tomando un parámetro de texto "cadena" que escoge el usuario.*/

function tipoCadena(texto) {
    let mayus = texto === texto.toUpperCase();
    let minus = texto === texto.toLowerCase(); /* a estas variables se les asigna el valor del "texto" introducido
    por el usuario y se las compara estrictamente "===" para saber si las mismas poseen o no letras en minúscula y 
    mayúscula. */
  
    if (mayus) {
      return "La cadena está formada por letras mayúsculas";
    } else if (minus) {
      return "La cadena está formada por letras minúsculas";
    } else {
      return "La cadena está formada por una combinación de mayúsculas y minúsculas";
    }
  } /* Gracias al bucle "if" podemos comparar las variables decretadas anteriormente con el texto y saber si están
  o no compuestas por mayúsculas o minúsculas. Y en caso de estar compuestas por una combinación, se tiene en cuenta
  como la variante "else" en nuestro bucle. */
  
  let cadena = prompt("Escriba su texto aquí: ");
  let tipoCadena_ = tipoCadena(cadena);
  console.log(tipoCadena_);