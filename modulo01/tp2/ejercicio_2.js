/* Ejercicio 2:
Completar las condiciones de los IF del siguiente script para que los mensajes se muestren siempre
de forma correcta.

No sé si esta es la forma correcta de realizarlo, me queda esa duda. Si bien los mensajes se muestran de manera
correcta, no sé si este es el fin que se espera del ejercicio. */

var num1 = 3;
var num2 = 7;

if( num1 <= num2 ) { // <= menor o igual que ...
    console.log( "num1 no es mayor que num2." );
    }
    if( num2 > 0 ) { // > mayor que ...
    console.log( "num2 es positivo" );
    }
    if (num1 < 0 || num1 !== 0 ) { // < menor qué o distinto de ...
    console.log( "num1 es negativo o distinto de cero" );
    }
    if( num1++ <= num2 ) { // <= menor o igual qué ...
    console.log( "Incrementar en 1 unidad el valor de num1 no lo hace mayor o igual que num2" );
    }