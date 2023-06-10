/* Ejercicio 9:
Crear un programa que recibe las notas de un alumno, todos los números deben ser naturales
< 11. Debe calcular el promedio. Por último imprimir en pantalla si el valor de media es < 5
“Reprobado”, entre 6 y 8 “Aprobado” y si es mayor a 8 “Sobresaliente”.

Durante introducción a la programación, había realizado un ejercicio parecido pero en el programa PSeInt. Utilicé
una metodología parecida para la confección de este código, donde yo le pido un número limitado de notas al usuario,
en este caso 3. Guardo esas 3 notas en un arreglo, las sumo y luego las divido, dado los resultados de las 3 notas,
de eso dependerán los mensajes de "Reprobado", "Aprobado" y "Sobresaliente".

La razón del número limitado de notas es solo un ejemplo, la cantidad de notas dependerá de la necesidad que tenga el 
usuario, también podría pedirle al usuario que estableza la cantidad de notas que necesita subir cuando el programa se
inicializa y así sea más personalizado para el usuario. */

function ingresar3Notas() {
    let notas = [];
  
    for (let i = 1; i <= 3; i++) {
      let nota = parseFloat(prompt("Ingrese las notas:"));
      if (nota < 0 || nota > 10) {
      console.log("Nota inválida.");
      return [];
      }
      notas.push(nota);
    }
    return notas;
  }
  
  let notasIngresadas = ingresar3Notas();
  console.log(notasIngresadas);

  function sumarNotas(notas) {
    let suma = 0;
  
    for (let i = 0; i < notas.length; i++) {
      suma += notas[i];
    }
  
    return suma;
  }
  
  let notasIngresadas_ = notasIngresadas;
  let sumaNotas = sumarNotas(notasIngresadas_);
  console.log("La suma de las notas es: " + sumaNotas);

  let promedioNotas = sumaNotas / notasIngresadas.length;
  console.log("El promedio de las notas es: " + promedioNotas);

  function avisoNotas() {
    if (promedioNotas < 5) {
    console.log("Reprobado.");
    document.write("Reprobado"); 
  
  } else if (promedioNotas >= 5 && promedioNotas < 8) {
    console.log("Aprobado.");
    document.write("Aprobado");
    
  } else if (promedioNotas >= 8) {
    console.log("Sobresaliente.");
    document.write("Sobresaliente");
  }

  }

  let avisoNotas_ = avisoNotas();