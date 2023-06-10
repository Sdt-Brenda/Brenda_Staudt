let a, b;
a = 3;
b = 7;
resultado = a * b;

document.write(`Variable a contiene ${a} <br>`);
document.write(`Variable b contiene ${b} <br>`);
document.write(`El producto de a por b es ${resultado} <br>`);
document.write("Los puntos de interrupción son fundamentales para programar");

/* El problema con este archivo es que "result" no estaba definido en la línea número 8,
pusto que la variable definida en la cuarta línea de código, lleva el nombre de "resultado",
por ende, cuando la misma era llamada en la línea 8 con el nombre de "result",
el programa no encontraba ni un valor asignado a esta variable.
La solución fue colocar su nombre como está definido en la 4ta línea: "resultado". */