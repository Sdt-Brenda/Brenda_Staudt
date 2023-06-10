/* Ejercicio 8:
Crea una función que genere 100 números aleatorios entre 1 y 100 que no se repitan y luego
imprima por pantalla usando document.write().

En este caso la función no toma ni un parámetro, es dentro de la función que se realizan las operaciones 
correspondientes para que se generen los números aleatorios.
1. El "for" es el responsable de recorrer la operación 100 veces para generar los números que se piden.
2. "Math.random()" es la función encargada de generar los números aleatorios, lo multiplicamos por 1000
para escalar el rango de 0 a 999 ya que "Math.random()" devuelve un número de coma flotante, comprendido
en el rango de 0 a menor que 1.
3. "Math.floor()" es la función que redondea un número al múltiplo o al entero inferior más próximo de la cifra
significativa especificada. */

function numerosAleatorios() {
    let numeros = [];
  
    for (let i = 0; i < 100; i++) {
      let numeroAleatorio = Math.floor(Math.random() * 1000);
      numeros.push(numeroAleatorio);
    }
  
    return numeros;
  }
  
  let numeroAleatorio = numerosAleatorios();
  console.log(numeroAleatorio);
  document.write(`${numeroAleatorio.join(`\n </br> \n`)}`);