/*En este código, utilizamos la biblioteca "readline" para leer la entrada del usuario desde la consola. 
Luego, preguntamos al usuario el código del vino y lo almacenamos en la variable "codigo". Después, verificamos 
el código del vino y establecemos 
el descuento correspondiente. Finalmente, imprimimos el descuento por pantalla y cerramos la interfaz de lectura.*/

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce el código del vino: ', (codigo) => {
  let descuento = 0;

  if (codigo === 'blanco') {
    descuento = 0.05;
  } else if (codigo === 'tinto') {
    descuento = 0.1;
  }

  console.log(`El descuento correspondiente es del ${descuento * 100}%`);
  
  rl.close();
});
