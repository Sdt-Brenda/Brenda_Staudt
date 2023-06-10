// Ejercicio 1:

let valores = [true, false, 2, "hola", "mundo", 3, "char",];


/* 1. Determinar cuál de los “elementos de texto” es mayor, es decir el que contenga más letras:

- Convertir los elementos del array a "string/cadena"; si bien el código podría tranquilamente funcionar
teniendo en cuenta solo los datos que si son de tipo "string" ("hola", "mundo" y "char"). El dato false
que no es string, tiene la misma cantidad de caracteres que "mundo", que si es de tipo string.
Mi duda es si puedo hacer que el código tenga en cuenta esos datos también y ver qué sucede cuando se encuentra
con dos datos con la misma cantidad de caracteres.

En este caso, en la función utilizamos él método ".map" para devolver un nuevo arreglo que pase los elementos
del arreglo original a datos de tipo "string". Luego, es por medio de una expresión "for" que hacemos que el código
recorra la longitud de cada elemento, comparándolos y encontrando el que mayor cantidad de caracteres contenga.
Básicamente lo que hace, es utilizar las variables como auxiliares entre ellas para así poder comparar los elementos
unos con otros, guardando el elemento si es necesario o reemplazando el mismo. */

function cadenaVector() {

let stringArray = valores.map(element => element.toString());

let maxLong = 0;
let maxElement = [];

for (let i = 0; i < stringArray.length; i++) {
  let element = stringArray[i];
  let longitud = element.length;
  
  if (longitud > maxLong) {
    maxLong = longitud;
    maxElement = [element];
  }

  else if (longitud === maxLong) {
    maxElement.push(element);
  }

}

return maxElement;

}

console.log(cadenaVector());
document.write(`El elemento con la mayor cantidad de caracteres es: ${cadenaVector().join(`\n y \n`)}. </br> </br>`);


/* 3. Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta,
  multiplicación y división) realizadas con los dos elementos numéricos.

  En estas funciones de (+, -, * y /), básicamente lo que hacemos es crear variables de los elementos númericos de
  nuestro arreglo, ya que en este caso sabemos que tienen un lugar en específico. Y luego creamos una variable extra
  en la que se le asigna el valor de la (+, -, * y /) de los elementos numéricos de nuestro arreglo.*/

function sumaArray() {
let val1 = parseInt(valores[2]);
let val2 = parseInt(valores[5]);

let val3 = val1 + val2;
return val3;

}

console.log(sumaArray());
document.write(`La suma de los datos de tipo numérico en el array es: ${sumaArray()}. </br> </br>`);

// ----- ----- ----- ----- ----- 

function restaArray() {
  val1 = valores[2];
  val2 = valores[5];
  
  val3 = val1 - val2;
  return val3;
  
  }
  
  console.log(restaArray());
  document.write(`La resta de los datos de tipo numérico en el array es: ${restaArray()}. </br> </br>`);

// ----- ----- ----- ----- ----- 

function multiplicacionArray() {
    val1 = valores[2];
    val2 = valores[5];
    
    val3 = val1 * val2;
    return val3;
    
    }
    
    console.log(multiplicacionArray());
    document.write(`La multiplicación de los datos de tipo numérico en el array es: ${multiplicacionArray()}. </br> </br>`);

// ----- ----- ----- ----- ----- 

function divisionArray() {
  val1 = valores[2];
  val2 = valores[5];
  
  val3 = val1 / val2;
  return val3;
  
  }
  
  console.log(divisionArray());
  document.write(`La división de los datos de tipo numérico en el array es: ${divisionArray()}. </br> </br>`);


/* 2. Imprimir estos elementos de menor a mayor cantidad de letras:
Esta función lo que hace es comparar los elementos que se encuentran dentro del arreglo "valores[i]".
Funciona convirtiéndo los elementos a "string con toString()" y recorriendo sus longitudes. Una vez que los compara,
le agrega un valor de (0 (igual), 1 (mayor) y -1 (menor)), de esta forma al haber sido cada elemento comparado
y teniendo asignado un valor de orden, es posible con "sort(menorAmayor)", ordenar los elementos de menor a mayor
cantidad de caracteres.

PROBLEMA: tengo un inconveniente que no puedo solucionar hasta el momento. Mi idea es colocar esta función en orden
con las consignas del ejercicio, es decir antes de las funciones de (+. -, * y /), pero al hacer esto, mi arreglo
"valores[i]" cambia los tipos de datos de cada elemento, en este caso me arroja que los elementos terminan siendo
de tipo "boolean" y entonces, ya ni una de las operaciones a continuación arroja los resultados.*/

function menorAmayor(a, b) {
  if (a.toString().length < b.toString().length) {
return -1;
} else if (a.toString().length > b.toString().length) {
return 1;
} else {
return 0;
}
}

valores.sort(menorAmayor);
document.write(`El texto de menor a mayor cantidad de letras/caracteres, se escribe en el siguiente orden:
${valores.join(`\n - \n`)}. </br> </br>`); 


