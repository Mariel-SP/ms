/*En este código, creamos una función llamada "numeroMenor" que toma tres números como entrada: "num1", "num2" y "num3". 
Luego, verificamos si los tres números son iguales y, de ser así, devolvemos el String "números iguales". 
Si los números son distintos, inicializamos la variable "menor" con el valor de "num1" y luego comparamos cada número 
con "menor" para determinar el número menor. Finalmente, devolvemos el número menor encontrado.*/

function numeroMenor(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      return "números iguales";
    } else {
      let menor = num1;
  
      if (num2 < menor) {
        menor = num2;
      }
  
      if (num3 < menor) {
        menor = num3;
      }
  
      return menor;
    }
  }
  
  // Ejemplo de uso
  console.log(numeroMenor(5, 10, 3)); // Devuelve 3
  console.log(numeroMenor(1, 1, 1)); // Devuelve "números iguales"
  