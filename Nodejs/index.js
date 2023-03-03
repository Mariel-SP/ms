/*En este código, importamos el módulo "calculadoraSueldo" usando "require". Luego, establecemos el sueldo diario 
(en este caso, 500) y usamos la función "calcularSueldoConImpuestos" para calcular el sueldo con impuestos. 
Finalmente, imprimimos el sueldo diario y el sueldo con impuestos usando "console.log()".*/

const { calcularSueldoConImpuestos } = require("./calculadoraSueldo");

const sueldoDiario = 500;
const sueldoConImpuestos = calcularSueldoConImpuestos(sueldoDiario);

console.log(`El sueldo diario es: ${sueldoDiario}`);
console.log(`El sueldo con impuestos es: ${sueldoConImpuestos}`);
