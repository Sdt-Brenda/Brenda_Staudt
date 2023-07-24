// Declaro la función sumar y paso como parámetro 2 numeros.

function sumar(num1, num2) {
    resultado = num1 + num2;
    console.log("La suma es: "+resultado);
    };

    // Declaro la exportación de la función.

    module.exports = {
    "sumar": sumar
    };