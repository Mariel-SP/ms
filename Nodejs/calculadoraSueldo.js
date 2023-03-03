/*En este código, creamos una función llamada "calcularSueldoConImpuestos" que toma el sueldo diario como entrada 
y calcula el sueldo con impuestos (IVA) aplicados (16%). Luego, exportamos esta función usando "module.exports".*/

const calcularSueldoConImpuestos = (sueldoDiario) => {
    const IVA = 0.16;
    const sueldoConImpuestos = sueldoDiario * (1 + IVA);
    return sueldoConImpuestos;
  };
  
  module.exports = {
    calcularSueldoConImpuestos,
  };
  