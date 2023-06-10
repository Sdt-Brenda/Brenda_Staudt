let meses = [`No existe el mes 0.`, `Enero`, `Febrero`, `Marzo`,
`Abril`, `Mayo`, `Junio`, `Julio`, `Agosto`,
`Septiembre`, `Octubre`, `Noviembre`, `Diciembre`,];

let dia = new Date();

val1 = prompt("Introduzca un número del 1 al 12!");

switch (val1) {
    case "0":
             document.write(meses[0]);
    break;

    case "1":
        document.write(`El mes 01 es: ${meses[1]} !`);
    break;

    case "2":
        document.write(`El mes 02 es: ${meses[2]} !`);
    break;

    case "3":
        document.write(`El mes 03 es: ${meses[3]} !`);
    break;

    case "4":
        document.write(`El mes 04 es: ${meses[4]} !`);
    break;

    case "5":
        document.write(`El mes 05 es: ${meses[5]} !`);
    break;

    case "6":
        document.write(`El mes 06 es: ${meses[6]} !`);
    break;

    case "7":
        document.write(`El mes 07 es: ${meses[7]} !`);
    break;

    case "8":
        document.write(`El mes 08 es: ${meses[8]} !`);
    break;

    case "9":
        document.write(`El mes 09 es: ${meses[9]} !`);
    break;

    case "10":
        document.write(`El mes 10 es: ${meses[10]} !`);
    break;

    case "11":
        document.write(`El mes 11 es: ${meses[11]} !`);
    break;

    case "12":
        document.write(`El mes 12 es: ${meses[12]} !`);
    break;

    default:
    document.write(`No existe ese número de mes, por favor introduzca otro número.`);
}

document.write(`<br> La fecha actual es ${dia}`);