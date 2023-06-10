/* Ejercicio 10:
Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días. */

//Primero le pido que me indique de qué mes quiere saber la cantidad de días con la función "prompt()."
let mes = parseInt(prompt("Ingrese un número de mes aquí."));

/* En este caso decidí utilizar la declaración "switch" para comparar entre las posibilidades que pueda llegar
a elegir el usuario, en este caso del mes 01 al mes 12. Y así arrojar el dato de cuántos días posee cada mes
dependiendo de la elección del usuario.

Los meses se encuentran agrupados entre aquellos que posean la misma cantidad de días, para no crear una cantidad
innecesaria de casos y lograr hacer más acotado el código. */

let dias;

switch (mes) {
  case 1: // Enero
  case 3: // Marzo
  case 5: // Mayo
  case 7: // Julio
  case 8: // Agosto
  case 10: // Octubre
  case 12: // Diciembre
    dias = 31;
    break;

  case 4: // Abril
  case 6: // Junio
  case 9: // Septiembre
  case 11: // Noviembre
    dias = 30;
    break;

  case 2: // Febrero
    dias = 28;
    break;

  default:
    dias = "INVÁLIDO";
}

console.log("El mes ingresado tiene " + dias + " días.");
document.write("El mes ingresado tiene " + dias + " días.");