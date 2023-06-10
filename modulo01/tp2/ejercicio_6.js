/* Ejercicio 6:
Escribir un script que muestre la posición de la primera vocal de un texto introducido por
teclado. Por ejemplo: perro = “e” es la letra Nº2 ; árbol = “a” es la letra Nº1.

El texto que recibe el usuario es el ingresado por medio de la variable "texto = prompt()".
Lo que hace el código es comparar letra por letra el texto introducido, hasta encontrar una vocal.
Y de hacerlo, cambia la posición iniciada en "-1" y arroja el resultado de la operación, con la variable
"posicion", el bucle va guardando las posiciones que recorre hasta encontrar la vocal, siendo esta última
la que guarda definitivamente.*/

let texto = prompt("Introduce un texto:");
let primeraVocal = ""; // variable para almacenar la primera vocal encontrada
let posicion = -1; // se inicia en la posición en -1, para indicar que no se encontró ninguna vocal

for (let i = 0; i < texto.length; i++) {
  let letra = texto[i].toLowerCase(); // convertimos la letra a minúscula para hacer la comparación

  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    primeraVocal = letra;
    posicion = i;
    break; // salimos del bucle al encontrar la primera vocal
  }
}

if (posicion !== -1) {
  console.log(`La primera vocal es "${primeraVocal}" y se encuentra en la posición ${posicion}.`);
} else {
  console.log("No se encontró ninguna vocal en el texto.");
}