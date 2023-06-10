/* Ejercicio 3:
El factorial de un número entero positivo se define como el producto de todos los números
naturales anteriores o iguales a él. Es decir que multiplicando todos los factores n x (n-1) x (n-2) x ... x 1.

Por ejemplo: el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura FOR, crear un script que pueda calcular el factorial de un número entero. 

*/

function calculoFactorial(numero) {
    let factorial = 1; // el numero a calcular lo decide el usuario en "let numero = "prompt()"
  
    for (let i = numero; i >= 1; i--) {
      factorial *= i;
    } /* En este bucle "for", "i" toma el valor de "numero" y es a partir de ese número que empieza a recorrer los números
    anteriores a él, para así ir multiplicándolos con el operador "*=", tal cual como lo harías en la realidad para saber
    el factorial de un número. */
  
    return factorial;
  }
  
  let numero = prompt("Ingrese un número entero.");
  let factorialNumero = calculoFactorial(numero);
  console.log(`El factorial de ${numero} es ${factorialNumero}.`)