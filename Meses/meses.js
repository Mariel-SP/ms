/*En este código, utilizamos la biblioteca "readline" para leer la entrada del usuario desde la consola. 
Luego, preguntamos al usuario el número del mes y lo almacenamos en la variable "numeroMes". 
Después, verificamos si el número del mes está en el rango válido de 1 a 12. Si es así, establecemos 
el número de días en 31 por defecto y luego lo ajustamos para los meses que tienen 30 días o 28 días 
(en el caso de febrero). Finalmente, imprimimos el número de días por pantalla. */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el número del mes (1 al 12): ', (numeroMes) => {
  if (numeroMes >= 1 && numeroMes <= 12) {
    let dias = 31;

    if (numeroMes === '4' || numeroMes === '6' || numeroMes === '9' || numeroMes === '11') {
      dias = 30;
    } else if (numeroMes === '2') {
      dias = 28;
    }

    console.log(`El mes ${numeroMes} tiene ${dias} días.`);
  } else {
    console.log('El número de mes introducido no es válido.');
  }

  rl.close();
});
