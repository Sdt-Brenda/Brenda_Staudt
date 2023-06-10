/* Ejercicio 4:
Escribir el código de una función a la que se pasa como parámetro un número entero y
devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por
pantalla el resultado devuelto por la función.
Por ejemplo si ingresara un dos el resultado debe ser par y si ingresara un 5 el resultado
debe ser impar.

En este caso la función realiza una operación lógica. El hecho de que un número par sea divisible por 2,
quiere decir que al dividir el número por 2 el resto de la división es 0. */

function parVSimpar(numero) {
    if (numero % 2 === 0) {
      return "El número es par";
    } else {
      return "El número es impar";
    }
  }
  
  let numero = prompt("Ingrese un número aquí."); // el usuario decide el número que quiere calcular
  let calcular = parVSimpar(numero);
  console.log(calcular);
  document.write(calcular);