/* Ejercicio 7:
Escribir una función que reciba un texto y lo devuelva al revés.

El usuario indica los datos del texto por medio de la función "prompt()", luego el código llama a la función
encargada de devolver la cadena al revéz.
La función básicamente recorre la longitud del texto de atrás hacia adelante, es decir del último
caracter hacia el primero y lo va devolviendo en una nueva "string" por medio del método "charAt(). */

function invertirTexto(texto) {
    let textoInvertido = ''; // la variable encargada de guardar el texto original pero invertido
    for (let i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto.charAt(i);
    } // 
    return textoInvertido;
  }
  
  let texto = prompt("Ingrese su texto aquí.");
  let textoInvertido = invertirTexto(texto);
  console.log(textoInvertido);