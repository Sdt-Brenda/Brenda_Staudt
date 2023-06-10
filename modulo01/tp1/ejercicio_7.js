let dato, resultado;
val1 = window.prompt("Introduce tu nombre", "...");
val2 = window.prompt("Introduce tu apellido", "...");
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} `;

document.write(resultado);

/*En este código existen dos variables, la variable "dato" y la variable "resultado",
a ni una de las dos se les asigna un valor predeterminado. Sin embargo, en la línea 2 y 3,
se llama a un método que exige un ingreso de dato por parte del usuario,
y esto le pide por medio de una ventana que al cargar la página,
permite el ingreso del datos.
En este caso exige los datos de "val1 = nombre" y "val2 = apellido", ambas son variables que llaman a un método.
Luego, a la variable definida como "resultado", se le asigna el valor de las variables "val1 y val2" y es así como,
al llamar el método de "document.write(resultado), obtenemos el nombre y apellido del usuario,
ingresados anteriormente, de manera concatenada.*/