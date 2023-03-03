/*En este código, creamos una función llamada "esVocal" que toma un carácter como entrada: "caracter". 
Luego, creamos un array llamado "vocales" que contiene las vocales en minúscula. Usando el método "includes" 
del array, verificamos si el carácter ingresado (convertido a minúscula usando "toLowerCase()") se encuentra
 en el array de vocales. Si es así, devolvemos True. De lo contrario, devolvemos False.*/

function esVocal(caracter) {
    const vocales = ["a", "e", "i", "o", "u"];
  
    return vocales.includes(caracter.toLowerCase());
  }
  
  // Ejemplo de uso
  console.log(esVocal("a")); // Devuelve true
  console.log(esVocal("E")); // Devuelve true
  console.log(esVocal("b")); // Devuelve false
  